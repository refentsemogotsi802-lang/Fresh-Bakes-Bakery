document.addEventListener("DOMContentLoaded", function() {
const reviewForm = document.getElementById("reviewForm");
const reviewMessage = document.getElementById("reviewMessage");
const reviewList = document.getElementById("reviewList");
const errorMsg = document.getElementById("reviewError");

reviewForm.addEventListener("submit", function(event) {
    event.preventDefault();

if (text === "") {
    errorMsg.style.color = "red";
    errorMsg.textContent = "Please write a review before submitting.";
    return;
}

errorMsg.textContent = "";

const newReview = document.createElement("div");
newReview.className = "review";
newReview.innerHTML = "<p>" + text + "</p><small>Posted just now - Thank you!</small><hr>";

reviewsList.prepend(newReview);

reviewForm.reset();
 });
});
