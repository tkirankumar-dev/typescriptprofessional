// Class - is blueprint from which we can create objects. Which shares the same information, properties and methods.
// Interface - its more of a group of related properties and methods that descibes an object. It doesnot provide any details of implementation / not allow them to initialize them

// Pure type checking

interface iArtist1 {
  name: string;
}

// we cannot create an instance for interface 
// 'iArtist1' only refers to a type, but is being used as a value here.
// new iArtist1('ProArch');
// Interface are mainly used for type checking 
function artistFactoryInterface({ name }: iArtist1) {
  return { id: 101, name }; 
}
console.log(artistFactoryInterface({ name: "Kiran" }));

// Or we can implement the interface with class

interface iArtist2 {
  name: string;
}
class classArtistCreator2 implements iArtist2 {
  constructor(public name: string) {}
}
function artistFactory2({ name }: classArtistCreator2) {
  return new classArtistCreator2(name);
}
console.log(artistFactory2({ name: "Meena" }));

// Or we can simply go with class
// Class will provide the structural definition and implementation details. 
class classArtistCreator3 {
  constructor(public name: string) {}
}
function artistFactory3({ name }: classArtistCreator3) {
  return new classArtistCreator3(name);
}
console.log(artistFactory3({ name: "Reshi" }));
