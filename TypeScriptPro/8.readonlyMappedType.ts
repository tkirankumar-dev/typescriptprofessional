// Mapped Type - lets us define a mapping function for types.
// That is, it can take all properties of an existing type, transform them using the mapping rule, and create a new type comprising the transformed properties.
interface Person8 {
  name: string;
  age: number;
}

interface ReadOnlyPerson8 {
  readonly name: string;
  readonly age: number;
}

const person8: Person8 = {
  name: "Todd",
  age: 27
};

person8.name = "Kiran"; // immutable - they cannot be changed after they have been created. String is immutable – whereas StringBuilder is mutable.

function freezePerson(person8: Person8): Readonly<Person8> {
  //: ReadOnlyPerson8{
  return Object.freeze(person8);
}
// Here when we hover after commenting ReadOnlyPerson8 in above function
// we find newPerson const of type ReadOnly<Person8>, here ReadOnly is a mapped type
const newPerson = freezePerson(person8);
// newPerson.age = 17;

/**
 * Make all properties in T readonly
 * This is provided in lib.es5.d.ts when we Ctrl + click on Readonly mapped type, below code is provided by typescript.
 */
type MyReadonly<T> = {
  +readonly [P in keyof T]: T[P];
};

function freeze<T>(obj: T): MyReadonly<T> {
  return Object.freeze(obj);
}

const newPerson8 = freeze(person8);
// Cannot assign to 'age' because it is a read-only property.
// newPerson8.age = 10;
console.log(newPerson8);
