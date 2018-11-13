import VueResizeText from './VueResizeText.js'

const install = function(Vue) {
  Vue.directive('ResizeText', VueResizeText);
};

if (window.Vue) {
  window.VueResizeText = VueResizeText;
  Vue.use(install); // eslint-disable-line
}

VueResizeText.install = install;

export default VueResizeText;