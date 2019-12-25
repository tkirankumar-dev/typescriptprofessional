// keyof operator - union types

const person6 = {
  name: "Todd",
  age: 27
};

type Person6 = typeof person6;
type PersonKeys6 = keyof Person6; // union type - name | age

type PersonTypes6 = Person6[PersonKeys6]; // here we will have pure types instead of key.
// This is the starting step for type safe behaviour.

const anotherPerson6: Person6 = {
  name: "John",
  age: 30
};
