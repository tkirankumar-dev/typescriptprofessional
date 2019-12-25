interface Person11 {
    name: string;
    age: number;
    address: {};
}
declare type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
};
declare const person11: Pick<Person11, 'name' | 'age'>;
