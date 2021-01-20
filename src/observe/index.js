class Observer {
  constructor(value) {
    // 给所有响应式的值增加响应式属性, 可以通过value获得Observer实例
    Object.defineProperty(value, __ob__, {
      enumerable: false,
      configurable: false,
      value: this
    })
    this.walk(value);
  }
  walk(data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }
}

function defineReactive(data, key, value) {
  // 对value值惊醒监听
  observe(value);
  Object.defineProperty(data, key, {
    get() {
      return value;
    },
    set(newValue) {
      if (newValue === value) return;
      // 新的值也需要做监听
      observe(newValue);
      value = newValue;
    },
  });
}

function observe(data) {
  if (typeof data !== 'object' || data == null) {
    return;
  }
  return new Observer(data);
}
export default { observe };
