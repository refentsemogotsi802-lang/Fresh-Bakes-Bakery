document.addEventListener("DOMContentLoaded", function() {
const searchInput = document.getElementById("productSearch");
const products = document.querySelectorAll(".product");
 


searchInput.addEventListener("input", function() {
     const term = this.value.toLowerCase().trim();

     products.forEach(function(card) {
        const name = card.textContent.toLowerCase();
        if (text.includes(term)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
        });
    });
 });
