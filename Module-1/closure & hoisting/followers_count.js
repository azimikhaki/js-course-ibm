let count = 0;

// Not working:❌
// function increaseCount() {
//   count++;
//   return count;
// }
// document.getElementById("countDisplay").innerText = count;

// The right way: ✅
function increaseCount() {
  count++;
  displaCount(); // hoisted
  checkCountValue(); // hoisted
}

function displaCount() {
  document.getElementById("countDisplay").innerText = count;
}

function checkCountValue() {
  if (count === 10) {
    alert("Your Instagram post gained 10 followers! Congratulations!");
  } else if (count === 20) {
    alert("Your Instagram post gained 20 followers! Keep it up!");
  }
}

// Exercise: In this task you need to create a reset button which will reset the followers count code. For this you need to include:

// Also use alert popup box method to show alert message which will say that the Followers count has been reset.

function resetFollowersCount() {
  count = 0;
  displaCount();
  displayResetMsg();
}

function displayResetMsg() {
  alert("The Followers count has been reset!");
}
