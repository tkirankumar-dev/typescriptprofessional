// Object literal
const myObj2 = {
    myMethod() {
      console.log('Object:::', this);
    },
  };
  //myObj2.myMethod();
  
  // Function
  function myFunction2(...text: string[]) {
    console.log('Function:::', this, text);
  }
  
  //myFunction2();
  //myFunction2.call(myObj2);
  //myFunction2.call([]);

  const bindFunction1 = myFunction2.bind(myObj2, 'ABC', 'DEF');
  bindFunction1();
  bindFunction1();
  bindFunction1();
  
  const bindFunction = myFunction2.bind(myObj2);
  bindFunction('ABC', 'DEF');
  bindFunction('123', '456');
  bindFunction('ABC', 'DEF');
  myFunction2.call(myObj2, 'ABC', 'DEF');
  myFunction2.apply(myObj2, ['ABC', 'DEF']); 
  