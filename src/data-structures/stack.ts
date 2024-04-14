export class Stack<T> {
  #items: T[];

  constructor() {
    this.#items = [];
  }

  peek(): T | undefined {
    return this.size() === 0 ? undefined : this.#items[this.size() - 1];
  }

  push(...items: T[]): number {
    for (const item of items) {
      this.#items.push(item);
    }
    return this.size();
  }

  pop(): T | undefined {
    return this.#items.pop();
  }

  size(): number {
    return this.#items.length;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  clear(): void {
    this.#items = [];
  }
}

// Excercise 1:
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
