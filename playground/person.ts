export type Person = {
  firstName: string;
  lastName: string;
}

export const sayHello = (p: Person) => {
  return `Hello, ${p.firstName}`
}