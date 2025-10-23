const  helloWorld = require('./helloWorld').hello;

test('hello function should return "Hello, World!"', () => {
  expect(helloWorld()).toBe('Hello, World!');
});
