export default class Component {
  constructor(props = {}) {
    this.props = props;
    this.state = {};
    this.element = null;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  render() {
    // To be implemented by subclasses
    return '';
  }

  mount(container) {
    if (container) {
      container.innerHTML = this.render();
      this.element = container;
      this.afterRender();
    }
  }

  afterRender() {
    // Lifecycle hook for after rendering
  }
}
