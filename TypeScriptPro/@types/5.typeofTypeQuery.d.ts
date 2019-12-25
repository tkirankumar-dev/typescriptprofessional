declare const person: {
    name: string;
    age: number;
};
declare type Person = typeof person;
declare const anotherPerson: Person;
