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
}
