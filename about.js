const aboutButton = document.getElementById("aboutButton");
const aboutMessage = document.getElementById("aboutMessage");

if (aboutButton && aboutMessage) {
    aboutButton.addEventListener("click", function() {
        aboutMessage.hidden = !aboutMessage.hidden

        if (aboutMessage.hidden) {
            aboutButton.textContent = "Learn More";
        } else {
            aboutMessage.textContent =
              "At Fresh Bakes Bakery, we value quality ingredients, freshly baked products and friendly service for every customer.";
              aboutButton.textContent = "Show Less";        
        }
    });
}