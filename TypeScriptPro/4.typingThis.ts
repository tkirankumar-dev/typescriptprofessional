//No implicit this
const elem = document.querySelector('.click');
function handleClick(this: HTMLAnchorElement, event: Event){
    event.preventDefault();
    // 'this' implicitly has type 'any' because it does not have a type annotation
    // Now this will get all the DOM methods and event listeners 
    console.log(this.href);
}
// Argument of type '{ preventDefault(): void; }' is not assignable to parameter of type 'Event'.
// Type '{ preventDefault(): void; }' is missing the following properties from type 'Event': bubbles, cancelBubble, cancelable, composed, and 17 more.
// handleClick({ preventDefault(){}});

elem.addEventListener('click', handleClick, false);