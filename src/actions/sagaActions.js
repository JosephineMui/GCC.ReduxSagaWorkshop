export function safeSaga(sagaGeneratorFunc) {
  // eslint-disable-next-line func-names
  return function* (...args) {
    try {
      yield* sagaGeneratorFunc(...args);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Uncaught Saga Error:', error);
    }
  };
}
