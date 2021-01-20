import { observe } from './observe/index';

function initState(vm) {
  const opts = vm.$options;
  if (opts.props) {
    initProps(vm);
  }
  if (opts.methods) {
    initMethod(vm);
  }
  if (opts.data) {
    initData(vm);
  }
  if (opts.computed) {
    initComputed(vm);
  }
  if (opts.watch) {
    initWatch(vm);
  }
}

function initProps() {}
function initMethod() {}
// 初始化数据
function initData(vm) {
  let data = vm.$options.datas;
  data = vm._data = typeof data === 'function' ? data.call(vm) : data;
  for (const key in data) {
    proxy(vm, '_data', key);
  }
  observe(data);
}
function initComputed() {}
function initWatch() {}

function proxy(vm, source, key) {
  Object.defineProperty(vm, key, {
    get() {
      return vm[source][key];
    },
    set(newValue) {
      vm[source][key] = newValue;
    },
  });
}

export default { initState };
