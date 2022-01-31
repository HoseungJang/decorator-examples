export function Once() {
  return function (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any) => any>) {
    let called = false;
    let result: any = null;
    const method = descriptor.value;
    descriptor.value = function (...args: any) {
      if (called) {
        return result;
      }
      called = true;
      return (result = method?.call(this, ...args));
    };
  };
}
