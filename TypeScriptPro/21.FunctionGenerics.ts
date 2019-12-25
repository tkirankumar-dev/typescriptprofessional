// Generic is the way to create some form of dynamic type. we can do reusable components or functions that is more generic.
// We need not hardcord the specific type.

/* This list can have pizza / cookies / drinks
class Pizza {
  constructor(private name: string, private price: number) {}
}

class List {
    private list: Array<Pizza>; // any[]
    addItem(item: any): void{
        this.list.push(item);
    }
    getList(): any[]{
        return this.list;
    }
}

const list = new List();
list.addItem(new Pizza('Peperonni', 15));
list.addItem(new Coupon());

// this will be of type any[] and this will not be good with complex project.
const pizza = list.getList();
*/

// < > will be used to pass generic type
class List<T> {
  // Property 'list' has no initializer and is not definitely assigned in the constructor.
  // if we only give private list: T[] it gives above error we should
  //private list!: T[]; //add definite assignment assertion to property 'private list: T[];' - but this also cannot push items
  private list: T[] = []; // add initializer to property list

  addItem(item: T): void {
    //Cannot read property 'push' of undefined
    this.list.push(item);
  }

  getList(): T[] {
    return this.list;
  }
}

class Cookies {
  constructor(private name: string, private price: number) {}
}
const list = new List<Cookies>();
list.addItem(new Cookies("Manaco Biscuits", 15));
const cookiesConst = list.getList();
console.log(cookiesConst);

class Drinks {
  constructor(private name: string) {}
}
const anotherList = new List<Drinks>();
anotherList.addItem(new Drinks("Thumbs Up"));
const drinksConst = anotherList.getList();
console.log(drinksConst);
