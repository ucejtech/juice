// Globally register all base components for convenience, because they
// will be used very frequently. Components are registered using the
// PascalCased version of their file name.

const components = [];

const requireComponent = require.context('.', true, /_base-[\w-]+\.vue$/);


// For each matching file name...
requireComponent.keys().forEach((fileName) => {
  const componentConfig = requireComponent(fileName);
  const componentName = fileName
    .replace(/(\.*\/\w*)+_/, '') // check for ./_ or its nested equivalent ./xxx/_
    .replace(/\.\w+$/, '') // remove the .vue 
    .split('-')
    .map((kebab) => kebab.charAt(0).toUpperCase() + kebab.slice(1))
    .join('');

  components.push({
    name: componentName,
    component: componentConfig.default || componentConfig
  });
});

export default function(Vue) {
  components.map((comp) => {
    Vue.component(comp.name, comp.component);
  });
}
