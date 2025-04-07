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

    document.getElementById("greeting").textContent = greeting;
}
// form validation with error handling 
function validateForm(event) {
    event.preventDefault(); // Prevent form submission for validation
    
//Clear any previous error messages
    document.getElementById("errorMessages").textContent = "";

    try { 
        const name = document.getElementById("myName").value.trim();
        const email = document.getElementById("myEmail").value.trim();
        const date = document.getElementById("mydate").value.trim();
        comments = document.getElementById("myComments").value.trim();

//Simple validation checks
        if (!name || !email || !date || !comments) {
            throw new Error("All fields are required.");
        }
        if (!email.includes("@")) {
            throw new Error("Invalid email format.");
        }
// if everything is good, manually submit the form
        event.target.submit();
    } catch (error) {
        // Display error messages
        document.getElementById("errorMessages").textContent = error.message;
    }
}
//Attach validation function once the DOM is fully loaded
window.onload = function() {
    //call function
    displayGreeting();
    const form = document.getElementById("form");
    form.addEventListener("submit", validateForm);
}