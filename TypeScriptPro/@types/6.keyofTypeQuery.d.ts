declare const person6: {
    name: string;
    age: number;
};
declare type Person6 = typeof person6;
declare type PersonKeys6 = keyof Person6;
declare type PersonTypes6 = Person6[PersonKeys6];
declare const anotherPerson6: Person6;
