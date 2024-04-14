import { Stack } from './stack';

describe('Given a Stack data structure', () => {
  let testStack: Stack<number>;
  beforeEach(() => {
    testStack = new Stack<number>();
  });

  describe('When a new Stack is created', () => {
    test('Then it should be defined', () => {
      expect(testStack).toBeDefined();
    });
  });

  describe('When we peek at an Stack', () => {
    test('Then it should return the top item in the Stack or undefined if the Stack is empty', () => {
      expect(testStack.peek()).toBeUndefined();
      testStack.push(1, 2, 3, 5, 8, 13, 20);
      expect(testStack.peek()).toEqual(20);
      testStack.push(40);
      expect(testStack.peek()).toEqual(40);
    });
  });

  describe('When an item is pushed onto the Stack', () => {
    test('Then the item should be added to the Stack', () => {
      testStack.push(1, 2, 3);
      expect(testStack.push(4, 5, 6)).toBe(6);
    });
  });

  describe('When an item is popped from the Stack', () => {
    test('Then the item should be removed from the Stack', () => {
      testStack.push(1, 2, 3);
      expect(testStack.pop()).toEqual(3);
      expect(testStack.pop()).toEqual(2);
      expect(testStack.pop()).toEqual(1);
      expect(testStack.peek()).toBeUndefined();
    });
  });

  describe('When we want to know the size of the Stack', () => {
    test('Then it should return the number of items in the Stack', () => {
      testStack.push(1, 2, 3);
      testStack.push(4, 5, 6);
      expect(testStack.size()).toBe(6);
    });
  });

  describe('When we want to know if the Stack is empty', () => {
    test('Then it should return true if the Stack is empty, false otherwise', () => {
      expect(testStack.isEmpty()).toBe(true);
      testStack.push(1);
      expect(testStack.isEmpty()).toBe(false);
      testStack.pop();
      expect(testStack.isEmpty()).toBe(true);
    });
  });

  describe('When we want to clear the Stack', () => {
    test('Then it should remove all items from the Stack', () => {
      testStack.push(1, 2, 3);
      testStack.clear();
      expect(testStack.isEmpty()).toBe(true);
    });
  });
});
