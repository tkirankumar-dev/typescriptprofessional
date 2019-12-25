// Function
function myFunction() {
  console.log('Function:::', this);
}
myFunction(); // window is invoking the function

// Object literal
const myObj = {
  myMethod() {
    let sample = 1;
    console.log('Object:::', this);
  }
};
myObj.myMethod(); // This here is method.

// Classes
class MyClass {
  myMethod() {
    console.log('Class:::', this);
  }
}

const myInstance = new MyClass();
myInstance.myMethod(); // this here is MyClass
