const  helloWorld = require('./helloWorld');

test('hello function should return "Hello, World!"', () => {
  expect(helloWorld.hello()).toBe('Hello, World!');
});