// Takealot Website JavaScript

console.log("Takealot Website loaded successfully.");

const enquiryForm = document.querySelector("form");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        alert("Thank you for your enquiry. We will get back to you soon.");
    });
}