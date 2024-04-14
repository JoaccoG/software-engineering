import { Stack } from './stack';

describe('Given a Stack data structure', () => {
  let testStack: Stack<number[]>;
  beforeEach(() => {
    testStack = new Stack<number[]>();
  });

  describe('When a new Stack is created', () => {
    test('Then it should be defined', () => {
      expect(testStack).toBeDefined();
    });
  });

  describe('When we peek at an empty Stack', () => {
    test('Then it should return undefined', () => {
      expect(testStack.peek()).toBeUndefined();
    });
  });

  describe('When an item is pushed onto the Stack', () => {
    test('Then the item should be added to the Stack', () => {
      testStack.push([1, 2, 3]);
      expect(testStack.peek()).toEqual([1, 2, 3]);
    });
  });
});
