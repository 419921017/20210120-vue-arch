import { initState } from './state';

function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    const vm = this
    vm.$options = options
    initState(vm)
    if (vm.$options.$el) {
      vm.$mount(vm.$options.$el)
    }
  }
  Vue.prototype.$mount = function(el) {
    const vm = this
    const opts = vm.$options
    el = document.querySelector(el)

    if (!opts.render) {
      let template = opts.template
      if (!template && el) {
        template = el.outerHTML
      }
      const render = compileToFunctions(template)
      opts.render = render
    }
  }
}

export default {
  initMixin,
};
