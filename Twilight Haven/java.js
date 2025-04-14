"use strict";
// Display greeting based on time of day
function displayGreeting() {
    const currentHour = new Date().getHours();
    let greeting = "";

    if (currentHour < 12) {
        greeting = "Good Morning!";
    } else if (currentHour < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) {
        greetingElement.textContent = greeting;
    }
}
// form validation with error handling 
function validateForm(event) {
    event.preventDefault(); // Prevent form submission for validation
    const errorMessages = document.getElementById("errorMessages");
    if (!errorMessages) return;
    //Clear any previous error messages
    errorMessages.textContent = "";
    try { 
        const name = document.getElementById("myName").value.trim();
        const email = document.getElementById("myEmail").value.trim();
        const date = document.getElementById("mydate").value.trim();
        const comments = document.getElementById("myComments").value.trim();

    //Simple validation checks
        if (!name || !email || !date || !comments) {
            throw new Error("All fields are required.");
        }
        // Email format and domain validation
        const basicEmailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!basicEmailFormat.test(email)) {
            throw new Error("Please enter a valid email address.");
        }
    // Now block Gmail
        if (email.toLowerCase().endsWith("@gmail.com")) {
            throw new Error("Sorry, Gmail addresses are not allowed.");
        }
// if everything is good, manually submit the form
        event.target.submit();
    } catch (error) {
        // Display error messages
        errorMessages.textContent = error.message;
    }
}
//Attach validation function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    //call function
    displayGreeting();
    const form = document.getElementById("contactForm");
    form.addEventListener("submit", validateForm);
});