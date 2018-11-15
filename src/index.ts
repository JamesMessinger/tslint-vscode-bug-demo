export function add(a: number, b: number): number {
  console.log(empty());                             // <--- violates the "no-void-expression" rule
  return a + b;
}

export function empty(): void { }                   // <--- violates the "no-empty" rule
