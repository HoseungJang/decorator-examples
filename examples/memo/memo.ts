export function Memo() {
  const cache = new Map<string, string>();

  return function (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<(...args: any) => any>) {
    const method = descriptor.value;
    descriptor.value = function (...args: any) {
      const key = JSON.stringify(args);
      const cachedResult = cache.get(key);

      if (cachedResult) {
        return JSON.parse(cachedResult);
      }

      const result = method?.call(this, ...args);
      cache.set(key, JSON.stringify(result));
      return result;
    };
  };
}
