let length;
let width;
let result = document.getElementById("result");

function calculateArea() {
  length = parseFloat(document.getElementById("length").value);
  width = parseFloat(document.getElementById("width").value);

  let area = length * width;
  result.innerText = `The area of the rectangle is ${area}`;
}
