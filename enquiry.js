document.addEventListener("DOMContentLoaded",function() {

    const enquiryForm = document.getElementById("enquiryForm");

    if (!enquiryForm) {
        console.error("Enquiry form was not found.");
        return;
    }

    enquiryForm.addEventListener("submit",function(event) {

        event.preventDefault();

        const name =
        document.getElementById("customerName").value.trim();
        const email =
        document.getElementById("customerEmail").value.trim();
        const enquiryType = document.getElementById("enquiryType").value.trim();
        const productName =
        document.getElementById("productName").value.trim();
        const message =
        document.getElementById("enquiryMessage").value.trim();

        const enquiryMessage =
        document.getElementById("enquiryFeedback");

        // Check whether all required fields are completed
        if (!name || !email || !enquiryType || !message) {
            enquiryMessage.textContent =
            "Error: Please complete all required fields.";
            enquiryMessage.style.color = "red";
            return;
        }

        // Check the customer's name
        if (name.length < 2) {
            enquiryMessage.textContent =
            "Error: Please enter a valid name.";
            enquiryMessage.style.color = "red";
            return;
        }

        // Validate email address
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            enquiryMessage.textContent =
            "Error: Please enter a valid email address.";
            enquiryMessage.style.color = "red";
            return;
        }

        // Check the enquiry message
        if (message.length < 10) {
            enquiryMessage.textContent =
            "Error: Your message must obtain atleast 10 characters.";
            enquiryMessage.style.color = "red";
            return;
        }

        // Display success message
        enquiryMessage.textContent = 
        "Thank you! Your enquiry has passed validation and has been submitted successfully.";

        enquiryMessage.style.color = "green";

        // Clear the form
        enquiryForm.reset();

    });
});