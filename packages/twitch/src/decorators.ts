export function staticDecorator<T>() {
  return (constructor: T) => {};
}
