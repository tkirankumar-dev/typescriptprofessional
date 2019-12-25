// type of operator
console.log(typeof ''); // string
console.log(typeof []); // object

// inferred types - name as string and age as number
const person = {
    name: 'Todd',
    age: 27
  };
  console.log(`use, type of - for - type query: ${typeof person}`);
  type Person = typeof person;
  
  const anotherPerson: Person = {
    name: 'John',
    age: 30
  };
  
  // JavaScript
  // typeof person // 'object'
  