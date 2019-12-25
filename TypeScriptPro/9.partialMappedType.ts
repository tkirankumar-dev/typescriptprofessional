interface Person9 {
    name: string;
    age: number;
  }

  interface PartialPerson9 {
    name: string;
    age?: number;
  }
  
  function updatePerson(person9: Person9, prop: PartialPerson9){
    return {...person9, ...prop};
  }

  function updatePersonExt(person9: Person9, prop: Partial<Person8>){
    return {...person9, ...prop};
  }

  const person9: Person9 = {
    name: 'Todd',
    age: 27,
  };
  
  updatePerson(person9, {name: 'Kumar', age: 29});
  updatePerson(person9, {name: 'Kiran'});
  
  type MyPartial<T> = {
    readonly [P in keyof T]?: T[P]
  };

  function freeze9<T>(obj: T): MyPartial<T> {
    return Object.freeze(obj);
  }
  
  const newPerson9 = freeze9(person9);