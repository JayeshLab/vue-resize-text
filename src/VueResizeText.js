const debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this,
      args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
const __onResize = function(element) {
  const ctx = element.__ctx;
  const size =
    Math.max(
      Math.min(
        element.clientWidth / (ctx.ratio * 10),
        parseFloat(ctx.maxFontSize)
      ),
      parseFloat(ctx.minFontSize)
    ) + "px";
  element.style.fontSize = size;
};
const defaultOption = {
  delay: 200,
  ratio: 1,
  minFontSize: "16px",
  maxFontSize: "500px"
};
export default {
  inserted(el, binding) {
    const option = binding.value;
    const ctx = {
      ...defaultOption,
      ...option
    };
    el.__ctx = ctx;
    el.__debounceHandler = debounce(function () {__onResize(el)}, ctx.delay);
    if (typeof window !== 'undefined') {
      window.addEventListener("resize", el.__debounceHandler , { passive: true });
    }
    __onResize(el);
  },
  unbind(el) {
    if (typeof window !== 'undefined') {
      window.removeEventListener("resize", el.__debounceHandler, {
        passive: true
      });
    }
  }
};
