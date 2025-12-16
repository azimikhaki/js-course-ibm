const name = document.getElementById("name"); //userName
const age = document.getElementById("age"); //userAge
const email = document.getElementById("email"); //userEmail
const job = document.getElementById("job"); //userJob
const designation = document.getElementById("designation"); //userDesignation
const productType = document.getElementById("productType"); //userProductChoice
const feedbackText = document.getElementById("feedbackText"); //userFeedback

const submitBtn = document.getElementById("submitBtn");
const userInfo = document.getElementById("userInfo");
const closeModalBtn = document.getElementById("closeModal");

function submitFeedback() {
  submitBtn.disabled = true;
  submitBtn.style.cursor = "not-allowed";
  submitBtn.innerText = "Submitting...";

  setTimeout(() => {
    showModal();
    displayFeedback();
    submitBtn.innerText = "Submit Feedback";
  }, 1000);
}

function displayFeedback() {
  userInfo.style.display = "block";
  document.getElementById("userName").innerText = name.value
    ? name.value
    : "N/A";
  document.getElementById("userAge").innerText = age.value ? age.value : "N/A";
  document.getElementById("userEmail").innerText = email.value
    ? email.value
    : "N/A";
  document.getElementById("userJob").innerText = job.value ? job.value : "N/A";
  document.getElementById("userDesignation").innerText = designation.value
    ? designation.value
    : "N/A";
  document.getElementById("userProductChoice").innerText = productType.value
    ? productType.value
    : "N/A";
  document.getElementById("userFeedback").innerText = feedbackText.value
    ? feedbackText.value
    : "N/A";
}

function showModal() {
  document.getElementById("modal").style.display = "block";
}

function hideModal() {
  document.getElementById("modal").style.display = "none";
  submitBtn.disabled = false;
  submitBtn.style.cursor = "pointer";
}

submitBtn.addEventListener("click", submitFeedback);
closeModalBtn.addEventListener("click", hideModal);
