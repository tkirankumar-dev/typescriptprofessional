interface Person8 {
    name: string;
    age: number;
}
interface ReadOnlyPerson8 {
    readonly name: string;
    readonly age: number;
}
declare const person8: Person8;
declare function freezePerson(person8: Person8): Readonly<Person8>;
declare const newPerson: Readonly<Person8>;
/**
 * Make all properties in T readonly
 * This is provided in lib.es5.d.ts when we Ctrl + click on Readonly mapped type, below code is provided by typescript.
 */
declare type MyReadonly<T> = {
    +readonly [P in keyof T]: T[P];
};
declare function freeze<T>(obj: T): MyReadonly<T>;
declare const newPerson8: MyReadonly<Person8>;
