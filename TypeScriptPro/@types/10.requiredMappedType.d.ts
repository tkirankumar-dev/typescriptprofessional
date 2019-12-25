interface Person10 {
    name: string;
    age?: number;
}
declare type MyRequired<T> = {
    [P in keyof T]-?: T[P];
};
declare function printAge(person: MyRequired<Person10>): string;
declare const person10: MyRequired<Person10>;
declare const age: string;
