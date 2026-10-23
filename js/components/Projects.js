import Component from '../core/Component.js';

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.projects = [
      {
        id: 'hybrid-ess',
        title: 'Hybrid Energy Storage System (HESS) — EV Diagnostic Simulator',
        context: 'EV Systems & Simulation',
        description: 'Engineered an interactive web-based EV telemetry and diagnostic simulator modeling a parallel Hybrid Energy Storage System (Li-ion battery + Supercapacitor). Features real-time power flow visualization, bidirectional DC-DC converter dynamics, throttle/regen braking controls, and live Chart.js performance telemetry.',
        role: 'EV Systems & Simulation Engineer',
        tech: ['JavaScript (ES6+)', 'Chart.js', 'HTML5 Canvas', 'Energy Management Systems (EMS)', 'EV Powertrain Dynamics'],
        github: 'https://github.com/KUKI-Boi/hybrid-energy-storage-system.git',
        demo: 'https://kuki-boi.github.io/hybrid-energy-storage-system/',
        image: 'assets/images/hess-project.png',
        caseStudy: {
          problem: 'EV battery packs experience acute thermal stress, internal resistance losses, and accelerated degradation during aggressive acceleration spikes and regenerative braking transients without secondary high-power buffer storage.',
          approach: 'Formulated a parallel Hybrid Energy Storage System (HESS) integrating steady-state Li-ion battery storage with high-power-density supercapacitors, orchestrated by a rule-based Intelligent Energy Management System (EMS).',
          design: 'Built an interactive browser-based simulation interface featuring an HTML5 Canvas power flow animation, bidirectional DC-DC converter modeling, live throttle/braking controls, and real-time Chart.js telemetry tracking battery/supercap SOC, bus voltage, and current draw.',
          challenges: 'Accurately modeling power-split dynamics, managing supercapacitor state-of-charge (SOC) limits during continuous load transients, and delivering smooth 60 FPS client-side telemetry visualization.',
          outcome: 'Demonstrated up to 20% reduction in battery peak discharge stress, stabilized DC-link bus voltage transients, and deployed an open-source educational diagnostic platform accessible directly in the browser.',
          learnings: 'Mastered hybrid energy storage topologies, EMS power-sharing algorithms, and client-side real-time engineering visualization using HTML5 Canvas and Chart.js.'
        }
      },
      {
        id: 'regen-suspension',
        title: 'EV Regenerative Suspension & Energy Harvesting Simulator',
        context: 'EV Dynamics & Energy Recovery',
        description: 'Engineered an interactive multi-physics web simulator modeling vehicle dynamics, quarter-car suspension energy harvesting, and a battery-supercapacitor hybrid energy storage system (HESS). Features live road disturbances, digital twin suspension diagnostics, and dynamic power flow visualization.',
        role: 'EV Systems & Simulation Engineer',
        tech: ['JavaScript (ES6 Modules)', 'HTML5 Canvas', 'Real-Time Physics', 'Hybrid Energy Storage (HESS)', 'Digital Twin Suspension'],
        github: 'https://github.com/KUKI-Boi/Regenerative-Suspension.git',
        demo: 'https://kuki-boi.github.io/Regenerative-Suspension/',
        image: 'assets/images/regen-project.png',
        caseStudy: {
          problem: 'Automotive shock absorbers and suspension systems traditionally dissipate substantial kinetic energy as waste heat. Harvesting transient vibration power requires delicate coordination between mechanical damping, electromechanical generation, and secondary high-rate storage (supercapacitors) without compromising passenger ride comfort or vehicle stability.',
          approach: 'Formulated an integrated multi-domain vehicle energy simulator combining quarter-car dynamics, a linear-to-rotary electromagnetic suspension generator, and a dual-source (battery + supercapacitor) Energy Management System (EMS) to capture high-frequency road disturbances.',
          design: 'Built a modular browser simulation engine (vehicle dynamics, suspension models, supercapacitor circuit, EMS, and HUD dashboard) with an interactive digital twin suspension inspection modal (tracking real-time spring deflection, damper forces, and generator torque) and an animated multi-path power routing canvas.',
          challenges: 'Accurately resolving mechanical-to-electrical energy conversion across erratic road profiles (City Road, Highway, Rough Terrain) while regulating high-voltage transient spikes safely into supercapacitor buffers.',
          outcome: 'Demonstrated potential recoverability of up to 100W per wheel under standard road roughness, validated closed-loop battery life preservation via supercapacitor surge buffering, and launched an open-source interactive web simulator.',
          learnings: 'Mastered electromechanical energy harvesting models, quarter-car vibration physics, modular ES6 architecture, and interactive HTML5 Canvas engineering visualizations.'
        }
      },
      {
        id: 'intelligent-control',
        title: '3-DOF Aircraft Altitude Hold Autopilot — Cascade PID',
        context: 'Aerospace Flight Control Systems',
        description: 'Designed and validated an automated altitude hold autopilot using a nested cascade PID architecture for a 3-DOF longitudinal aircraft model in MATLAB/Simulink and Aerospace Blockset, decoupling fast pitch dynamics from outer altitude regulation.',
        role: 'Flight Control Systems Engineer',
        tech: ['MATLAB', 'Simulink', 'Aerospace Blockset', 'Cascade PID Control', 'Flight Dynamics (3-DOF)'],
        github: 'https://github.com/KUKI-Boi/altitude-hold-controller.git',
        image: 'assets/images/optimal-project.png',
        caseStudy: {
          problem: 'Single-loop aircraft altitude autopilots suffer from sluggish climb response, excessive altitude overshoot, and poor wind disturbance rejection due to the non-linear coupling and differing time constants between pitch attitude dynamics and vertical trajectory rates.',
          approach: 'Architected a dual-loop cascade PID control topology: a fast inner pitch loop commanding elevator deflection to stabilize attitude rates (q, theta), driven by a slower outer altitude loop generating dynamic pitch references from vertical altitude error (h - h_ref).',
          design: 'Implemented in MATLAB/Simulink utilizing the Aerospace Blockset 3-DOF Longitudinal Airframe dynamics block (Sky Hogg). Integrated anti-windup saturation limits, elevator actuator rate limiters, and real-time Scope telemetry capturing Angle of Attack (alpha), Pitch Angle (theta), Pitch Rate (q), and Altitude (h).',
          challenges: 'Tuning frequency-domain phase and gain margins to prevent elevator control flutter or phugoid oscillation while ensuring smooth transient capture during large step changes (e.g., 2000m to 2200m climb commands).',
          outcome: 'Achieved smooth climb trajectory acquisition with rapid settling time, reduced overshoot by over 15%, and guaranteed zero steady-state error across the longitudinal flight envelope.',
          learnings: 'Deepened expertise in multi-loop cascade control architectures, aircraft longitudinal equations of motion (EOM), Simulink Aerospace Blockset modeling, and control stability margins.'
        }
      },
      {
        id: 'crop-disease-surveillance',
        title: 'Crop Health & Disease Surveillance',
        context: 'Computer Vision & Agriculture',
        description: 'Developed an algorithmic computer vision pipeline for drone-based aerial crop monitoring to detect plant leaf diseases, segment healthy vs. infected vegetation, and quantify infection severity.',
        role: 'Computer Vision Engineer',
        tech: ['Python', 'OpenCV', 'NumPy', 'Streamlit', 'Image Segmentation'],
        github: 'https://github.com/KUKI-Boi/Crop-Health-and-Disease-Surveillance.git',
        demo: 'https://crophealthanddiseasesurveillance.streamlit.app/',
        image: 'assets/images/crop-project.png',
        caseStudy: {
          problem: 'Farmers often detect crop infections only after irreversible yield loss has occurred. Manual field inspection across expansive agricultural acreage is labor-intensive, error-prone, and slow.',
          approach: 'Implemented a classical non-deep-learning computer vision pipeline using OpenCV, color conversions (HSV, Lab, Excess Green Index - ExG), and adaptive Otsu thresholding to segment healthy leaves and isolate disease spots dynamically.',
          design: 'Engineered a multi-stage architecture comprising dynamic label inspection, vegetation index extraction, pixel area severity categorization, and automated markdown academic report generation.',
          challenges: 'Handling varying ambient illumination conditions, natural shadow artifacts, and diverse color textures of diseases (e.g., wheat stripe rust, soybean bacterial blight) without overfitting.',
          outcome: 'Achieved high-precision segmentation of infection areas, dynamic area percentage calculations, and deployed a live interactive Streamlit web dashboard for field diagnostic evaluation.',
          learnings: 'Mastered mathematical image morphology, spectral vegetation indices (ExG), and designing lightweight, interpretable CV pipelines suitable for edge drone hardware.'
        }
      },
      {
        id: 'motoriq',
        title: 'MotorIQ — Electric Motor Intelligence & Digital Twin',
        context: 'Industrial IoT & Digital Twin',
        description: 'Architected an industrial IoT telemetry, digital twin, and predictive maintenance platform for electric motors and powertrains, delivering real-time telemetry streaming and 3D simulation.',
        role: 'IoT & Full-Stack Systems Engineer',
        tech: ['React', 'TypeScript', 'Three.js / WebGL', 'MQTT / WebSockets', 'TailwindCSS'],
        github: 'https://github.com/KUKI-Boi/MotorIQ.git',
        image: 'assets/images/motoriq-project.png',
        caseStudy: {
          problem: 'Electric motors and drivetrain actuators in electric vehicles and smart manufacturing operations are prone to unpredicted winding degradation, bearing wear, and thermal overshoots without real-time telemetry and diagnostics.',
          approach: 'Engineered a full-stack digital twin telemetry system with live MQTT WebSocket streaming, hardware sensor ingestion, interactive 3D WebGL motor visualization with live thermal cutaway inspection, and automated predictive fault detection.',
          design: 'Structured around reactive telemetry streams (speed, torque, voltage, vibration FFT, thermal sensors), interactive Three.js 3D model interaction, historian logging, and threshold-based alarm triggering.',
          challenges: 'Handling continuous high-frequency telemetry data streams over WebSockets without rendering bottlenecks or UI jitter while maintaining real-time 3D model frame rates.',
          outcome: 'Delivered an end-to-end industrial motor intelligence suite featuring real-time diagnostic telemetry, simulation sandbox, automated fault detection, and digital twin synchronization.',
          learnings: 'Deepened expertise in Three.js/Fiber 3D graphics, industrial IoT MQTT communication architectures, and building low-latency diagnostic interfaces.'
        }
      }
    ];
  }

  render() {
    return `
      <div class="container">
        <h2 class="text-accent uppercase tracking-widest mb-4 reveal">Featured Projects</h2>
        <h3 class="fs-4xl mb-12 reveal delay-100">Engineering solutions for complex mobility challenges.</h3>
        
        <div class="projects-grid grid grid-cols-1 gap-12">
          ${this.projects.map(project => `
            <div class="project-item" data-id="${project.id}">
              <div class="project-card">
                <div class="project-info">
                  <span class="text-accent uppercase tracking-widest fs-xs mb-2 reveal">${project.context}</span>
                  <h4 class="fs-2xl mb-4 reveal delay-100">${project.title}</h4>
                  <p class="mb-6 reveal delay-200">${project.description}</p>
                  <p class="text-secondary fs-sm mb-8 reveal delay-300">Role: ${project.role}</p>
                  <div class="flex gap-4 reveal delay-400 project-actions">
                    <button class="btn btn-primary" onclick="window.app.viewProject('${project.id}')">View Case Study</button>
                    ${project.github ? `
                      <a href="${project.github}" class="btn btn-outline" target="_blank" aria-label="GitHub" style="display:inline-flex; align-items:center; justify-content:center; padding:0.75rem; width: 48px; border-color: var(--border-subtle);">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                      </a>
                    ` : ''}
                    ${project.demo ? `
                      <a href="${project.demo}" class="btn btn-outline demo-btn" target="_blank" aria-label="Live Demo" style="display:inline-flex; align-items:center; justify-content:center; padding:0.75rem; width: 48px; border-color: var(--border-subtle); overflow:hidden;">
                        <svg width="20" height="20" class="car-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                      </a>
                    ` : ''}
                  </div>
                </div>
                <div class="project-visual reveal delay-200">
                  ${project.image ? `<img src="${project.image}" alt="${project.title}" class="project-img">` : `<div class="visual-placeholder"></div>`}
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
}
