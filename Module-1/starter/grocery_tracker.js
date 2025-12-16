let grocery1, grocery2, grocery3;
let result = document.getElementById("result");

function groceryTracker() {
  grocery1 = parseFloat(document.getElementById("grocery1").value);
  grocery2 = parseFloat(document.getElementById("grocery2").value);
  grocery3 = parseFloat(document.getElementById("grocery3").value);
  let total = grocery1 + grocery2 + grocery3;

  if (!total) {
    result.innerHTML = `<b style="color: red;">Please enter the values for grocery 1, 2, or 3</b>`;
    return;
  }

  result.innerText = `The total amount is: $${total}`;
}
