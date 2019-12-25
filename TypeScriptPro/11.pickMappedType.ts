interface Person11 {
    name: string;
    age: number;
    address: {}
  }
  
  type MyPick<T, K extends keyof T> = {
    [P in K]: T[P]
  };
  
  // Property 'name' is missing in type '{ age: number; }' but required in type 'Pick<Person11, "name" | "age">'.ts(2741)
  // pickMappedType.ts(2, 5): 'name' is declared here.
  // Instead of partial, we can go with Pick.
  const person11: Pick<Person11, 'name' | 'age'> = {
    name: 'Todd',
    age: 27
  };