import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

// Load environment variables from .env if present
try {
  const envPath = path.join(__dirname, '.env');
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf-8');
    envContent.split(/\r?\n/).forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const index = trimmed.indexOf('=');
        if (index > 0) {
          const key = trimmed.substring(0, index).trim();
          const val = trimmed.substring(index + 1).trim().replace(/^['"]|['"]$/g, '');
          if (key) {
            process.env[key] = val;
          }
        }
      }
    });
    console.log('Loaded local environment variables from .env');
  }
} catch (e) {
  console.warn('Error reading/parsing .env file:', e.message);
}

// MIME types mapping
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
};

const server = http.createServer(async (req, res) => {
  // Parse URL path
  const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  const pathname = urlObj.pathname;

  console.log(`[${new Date().toLocaleTimeString()}] ${req.method} ${pathname}`);

  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  // Handle API route: /api/contact
  if (pathname === '/api/contact' && req.method === 'POST') {
    try {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      req.on('end', async () => {
        try {
          const parsedBody = body ? JSON.parse(body) : {};
          
          // Mock Vercel req/res objects
          const vercelReq = {
            method: req.method,
            headers: req.headers,
            body: parsedBody
          };

          const vercelRes = {
            statusCode: 200,
            status(code) {
              this.statusCode = code;
              return this;
            },
            json(data) {
              res.writeHead(this.statusCode, { 'Content-Type': 'application/json; charset=utf-8' });
              res.end(JSON.stringify(data));
              return this;
            },
            send(data) {
              res.writeHead(this.statusCode, { 'Content-Type': 'text/html; charset=utf-8' });
              res.end(data);
              return this;
            }
          };

          // Dynamically import and run the api handler
          const apiPath = path.join(__dirname, 'api', 'contact.js');
          const { default: handler } = await import(`file://${apiPath.replace(/\\/g, '/')}`);
          await handler(vercelReq, vercelRes);
        } catch (err) {
          console.error('API execution error:', err);
          res.writeHead(500, { 'Content-Type': 'application/json; charset=utf-8' });
          res.end(JSON.stringify({ success: false, message: `Internal server error: ${err.message}` }));
        }
      });
    } catch (err) {
      console.error('API body parse error:', err);
      res.writeHead(400, { 'Content-Type': 'application/json; charset=utf-8' });
      res.end(JSON.stringify({ success: false, message: 'Bad request body' }));
    }
    return;
  }

  // Serve static files
  let filePath = path.join(__dirname, pathname === '/' ? 'index.html' : pathname);

  // Security: check path traversal and block dotfiles (.env, .git, etc.)
  const resolvedPath = path.resolve(filePath);
  const baseName = path.basename(resolvedPath);
  if (!resolvedPath.startsWith(path.resolve(__dirname)) || baseName.startsWith('.')) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  // Check if file exists
  fs.stat(resolvedPath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Return 404
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 Not Found');
      return;
    }

    const ext = path.extname(resolvedPath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(resolvedPath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n🚀 Local portfolio dev server running at:`);
  console.log(`   👉 http://localhost:${PORT}/`);
  console.log(`\nPress Ctrl+C to stop the server.\n`);
});
