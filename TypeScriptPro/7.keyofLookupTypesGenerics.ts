const person7 = {
    name: 'Todd',
    age: 27,
  };
  
  type Person7 = typeof person7;
  // hover - Name | Age
  type PersonKeys7 = keyof Person7;
  // hover - string | number
  type PersonTypes7 = Person7[PersonKeys7]; // look up
  
  function getPropertyOld(obj: object, key: string) {
    return obj[key];
  }
  
  function getPropertyGeneric<T, K extends keyof T>(obj: T, key: K) {
    // function getPropertyGeneric<T, K>(obj: T, key: K) { // without - extends keyof T, we get below error.
    // Type 'K' cannot be used to index type 'T'
    return obj[key];
  }
  
  const personeNameOldStyle = getPropertyOld(person7, 'name'); // but this will not get the exact key - this will be always any

  // Argument of type '"abc"' is not assignable to parameter of type '"name" | "age"'.
  // Index access type - type safe lookup - lookup type
  const personName7 = getPropertyGeneric(person7, 'age');
  
  const anotherPerson7: Person7 = {
    name: 'John',
    age: 30,
  };
  console.log(anotherPerson7);