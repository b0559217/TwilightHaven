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

//create instances of WeekendEvent and display them
document.addEventListener("DOMContentLoaded", function() {
    //call greeting function
    displayGreeting();

    //define events using WeekendEvent class
    const events = [
        new Weekend Event("Friday", "10:00 AM", "Yoga class"),
        new WeekendEvent("Friday", "6:30 PM", "Argentinian grill night"),
        new WeekendEvent("Saturday", "12:00 PM", "HITT workout class"),
        new WeekendEvent("Saturday", "5:00 PM", "Photography tour"),
        new WeekendEvent("Saturday", "8:00 PM", "Jazz club night"),
        new WeekendEvent("Sunday", "11:00 PM", "Kickboxing class"),
        new WeekendEvent("Sunday", "6:30 PM", "Murder mystery night"),
    ];

    //group events by day for table display
    const eventsByDay = {};
    events.forEach(event => {
        if (!eventsByDay[event.day]) {
            eventsByDay[event.day] = [];
        }
        eventsByDay[event.day].push(event);
    });

    //Generate table rows 
    const eventTable = this.documentElementById("eventTable");
    for (const day in eventsByDay) {
        const eventDetails = eventsByDay[day].map(event => event.getEventDetails()).join ("<br>");
        const row = <tr><th>${day}</th><td>${eventDetails}</td></tr> ;
        eventTable.insertAdjacentHTML("beforeend" , row);
    }
});

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