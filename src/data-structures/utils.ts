import { Stack } from './stack';

// Exercise 1:
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

/* Excercise 2:

--->> Justify the choice of your data structure.
I chose the Stack data structure because it fits well with the requirements of the problem of checking the validity of the order of parentheses, brackets and braces. Stacks follow the Last In, First Out (LIFO) principle, which aligns with how parentheses, brackets and braces should be matched in the correct order.
The time complexity of the isDelimitersOrderValid function is O(n) because we iterate through the delimiters string once, where "n" is the length of the string. The space complexity is O(n) because we use a stack to store the open delimiters, which can grow up to the length of the input string, in the worst case.

--->> In JavaScript, ¿what kind of data structure are the "Arrays"?
Although the data type name in JavaScript is "Array" in reality, Arrays in JavaScript are more dynamic and flexible than what would typically be considered an "Array" data structure by definition, like in other programming languages.
Arrays in JavaScript are more like "Linked Lists", as they can grow or shrink dynamically in size, and its references stored in memory are not necessarily next to each other, this means that JavaScript Arrays do not have the same characteristics and constraints as the Arrays by concept, but are more dynamic and versatile.
*/
