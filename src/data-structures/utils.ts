import { Stack } from './stack';

export const isDelimitersOrderValid = (delimiters: string): boolean => {
  const stack = new Stack<string>();
  const delimiterPairs: { [key: string]: string } = {
    ')': '(',
    ']': '[',
    '}': '{',
  };

  for (const char of delimiters) {
    if (isOpenDelimiter(char)) stack.push(char);
    if (isCloseDelimiter(char)) {
      const expectedOpenDelimiter = delimiterPairs[char];
      const top = stack.pop();
      if (top !== expectedOpenDelimiter) return false;
    }
  }

  return stack.isEmpty();
};

const isOpenDelimiter = (char: string): boolean => {
  return char === '(' || char === '[' || char === '{';
};

const isCloseDelimiter = (char: string): boolean => {
  return char === ')' || char === ']' || char === '}';
};
