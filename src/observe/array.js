let oldArrayPrototype = Array.prototype;

let arrayMethods = Object.create(oldArrayPrototype);

let methods = ['push', 'pop', 'shift', 'unshift', 'reverse', 'sort', 'splice'];

methods.forEach((method) => {
  arrayMethods[method] = function (...args) {
    const result = oldArrayPrototype[method].apply(this, args);
    const ob = this.__ob__;
    let inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
      case 'splice':
        inserted = args.slice(2);
      default:
        break;
    }
    // 对新增的每一项进行检测
    if (inserted) {
      ob.observeArray(inserted);
    }
    return result;
  };
});

export default { arrayMethods };
