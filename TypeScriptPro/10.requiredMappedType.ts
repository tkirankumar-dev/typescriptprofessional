interface Person10 {
    name: string;
    age?: number;
  }
  // even though age is optional we have to make sur that the age is provided with Required
  // [P in keyof T]?: T[P] is same as [P in keyof T]+?: T[P] - here we learned + / - modifiers 
  type MyRequired<T> = {
    [P in keyof T]-?: T[P] // this will remove readonly properties if any
  };
  
  function printAge(person: MyRequired<Person10>) {
    return `${person.name} is ${person.age}`;
  }
  // Property 'age' is missing in type '{ name: string; }' but required in type 'Required<{ name: string; age: number; }>'
  const person10: MyRequired<Person10> = {
    name: 'Todd',
    age: 27
  };
  
  const age = printAge(person10);
  console.log(age);
  