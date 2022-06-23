const createComponent = (root, component) => {
  if (root) {
    const el = document.querySelector(root);

    if (el && component) {
      el.innerHTML = component;

      return component;
    }
  }
};

export default createComponent;