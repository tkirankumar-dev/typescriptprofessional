declare class List<T> {
    private list;
    addItem(item: T): void;
    getList(): T[];
}
declare class Cookies {
    private name;
    private price;
    constructor(name: string, price: number);
}
declare const list: List<Cookies>;
declare const cookiesConst: Cookies[];
declare class Drinks {
    private name;
    constructor(name: string);
}
declare const anotherList: List<Drinks>;
declare const drinksConst: Drinks[];
