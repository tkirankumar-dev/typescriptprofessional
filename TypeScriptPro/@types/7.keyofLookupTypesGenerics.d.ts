declare const person7: {
    name: string;
    age: number;
};
declare type Person7 = typeof person7;
declare type PersonKeys7 = keyof Person7;
declare type PersonTypes7 = Person7[PersonKeys7];
declare function getPropertyOld(obj: object, key: string): any;
declare function getPropertyGeneric<T, K extends keyof T>(obj: T, key: K): T[K];
declare const personeNameOldStyle: any;
declare const personName7: number;
declare const anotherPerson7: Person7;
