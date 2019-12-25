interface Person9 {
    name: string;
    age: number;
}
interface PartialPerson9 {
    name: string;
    age?: number;
}
declare function updatePerson(person9: Person9, prop: PartialPerson9): {
    name: string;
    age: number;
};
declare function updatePersonExt(person9: Person9, prop: Partial<Person8>): {
    name: string;
    age: number;
};
declare const person9: Person9;
declare type MyPartial<T> = {
    readonly [P in keyof T]?: T[P];
};
declare function freeze9<T>(obj: T): MyPartial<T>;
declare const newPerson9: MyPartial<Person9>;
