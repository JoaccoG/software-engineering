import { Stack } from './stack';

describe('Given a Stack data structure', () => {
  let testStack: Stack;
  beforeEach(() => {
    testStack = new Stack();
  });

  describe('When a new Stack is created', () => {
    test('Then it should be defined', () => {
      expect(testStack).toBeDefined();
    });
  });
});
