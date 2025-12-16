// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";

{
  // Block scope
  var blockVar = "I'm a block-scoped var";
  let blockLet = "I'm a block-scoped let";
  const blockConst = "I'm a block-scoped const";
}

console.log(globalVar); // Accessible everywhere
console.log(globalLet); // Accessible everywhere
console.log(globalConst); // Accessible everywhere

console.log(blockVar); // Accessible due to var's function scope
// console.log(blockLet); // Uncaught ReferenceError: blockLet is not defined
// console.log(blockConst); // Uncaught ReferenceError: blockConst is not defined

function scopeTest() {
  // Function scope
  var funcVar = "I'm a function-scoped var";
  let funcLet = "I'm a function-scoped let";
  const funcConst = "I'm a function-scoped const";

  console.log(funcVar); // Accessible within the function
  console.log(funcLet); // Accessible within the function
  console.log(funcConst); // Accessible within the function
}
scopeTest();

console.log(funcVar); // Uncaught ReferenceError: funcVar is not defined
// console.log(funcLet); // Uncaught ReferenceError: funcLet is not defined
// console.log(funcConst); // Uncaught ReferenceError: funcConst is not defined