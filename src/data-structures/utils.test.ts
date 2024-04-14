import { isDelimitersOrderValid } from './utils';

describe('Given a isDelimitersOrderValid function', () => {
  describe('When a string with delimiters is passed', () => {
    test("Then it should return true if the delimiter's order is valid, and false if it is not", () => {
      expect(isDelimitersOrderValid('[({[]})]')).toBe(true);
      expect(isDelimitersOrderValid('()')).toBe(true);
      expect(isDelimitersOrderValid('')).toBe(true);
      expect(isDelimitersOrderValid('[{}')).toBe(false);
      expect(isDelimitersOrderValid('([)]')).toBe(false);
    });
  });
});
