/*
var Sizes;
(function (Sizes) {
    Sizes["Small"] = "small";
    Sizes["Medium"] = "medium";
    Sizes["Large"] = "large";
})(Sizes || (Sizes = {}));
*/
// inlining members - we can add const - this will not generate javascript code and can be directly accessed. 
const enum Sizes {
  Small = "small", // aliases to 0 in previous example
  Medium = "medium",
  Large = "large" // we can also put number instead of string
}
let selected: Sizes = Sizes.Small; // Default value

function updateSize(size: Sizes): void {
  selected = size;
}
console.log(selected);
updateSize(Sizes.Large);
console.log(selected);
