class MyClass3 {
    myMethod() {
      const foo = 123;
      console.log('1', this);
      const that = this;
      setTimeout(function(){
        console.log('2', that);  
      }, 0);
      setTimeout(function(){
        console.log(foo);
        console.log('3', this);  
      }, 0);
      // This is the difference between arrow function and normal function
      // Arrow function doesnot have diffent scope than the main object.
      setTimeout(() => {        
        console.log('4', this);
      }, 0);
    }
    foo(){
      // foo is in this - lexical scope of foo method
      const foo = 234;
      setTimeout(() => {
        console.log(foo);
      }, 0);
    }
  }
  
  const myInstance3 = new MyClass3();
  myInstance3.myMethod();
  myInstance3.foo();
  