// can reverse both array or a string
function reverse1(something: string | any[]): string | any[]{
    if (typeof something === 'string') {
        return something
          .split('') // sprint string into array
          .reverse() // reverse
          .join(''); // and then join
      }
      return something.reverse(); // difference between .slice().reverse() and directly reverse() is that 
      // slice().reverse() will create the cloned array and then reverse. This will not effect the sent array.
      // but the other one will directly change the array sent.
}
// when we hover on reverse1 - we can see - reverse1(something: string | any[]): string | any[]

console.log(reverse1('Pepperoni')); // this will be printed as inoreppeP
console.log(reverse1(['bacon', 'pepperoni', 'chili', 'mushrooms'])); // this will be printed as [ 'mushrooms', 'chili', 'pepperoni', 'bacon' ]


function reverse(str: string): string;
// function reverse(arr: any[]): any[];
function reverse<T>(arr: T[]): T[];

// reverse function implementation 
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  if (typeof stringOrArray === 'string') {
    return stringOrArray
      .split('') 
      .reverse()
      .join('');
  }
  return stringOrArray.slice().reverse();
}
// function reverse(str: string): string (+1 overload)
// when we type reverse( we get below 1st option and to go to second we can press down arrow and up arrow to come back to first.
// reverse(str: string): string
// reverse<T>(arr: T[]): T[]
console.log(reverse('Pepperoni'));
console.log(reverse(['bacon', 'pepperoni', 'chili', 'mushrooms']));
console.log(reverse([1, 2, 3, 4]));
