export class Stack<T> {
  #items: T[];

  constructor() {
    this.#items = [];
  }

  peek(): T | undefined {
    return this.#items.length === 0
      ? undefined
      : this.#items[this.#items.length - 1];
  }

  push(item: T): void {
    this.#items.push(item);
  }

  pop(): T | undefined {
    return this.#items.pop();
  }
}
