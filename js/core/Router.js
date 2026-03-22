export default class Router {
  constructor(routes) {
    this.routes = routes;
    this.currentPath = null;
    window.addEventListener('popstate', () => this.handleRoute());
  }

  init() {
    this.handleRoute();
  }

  navigate(path) {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  handleRoute() {
    const path = window.location.pathname;
    this.currentPath = path;
    const route = this.routes[path] || this.routes['/'];
    if (route) {
      route();
    }
  }
}
