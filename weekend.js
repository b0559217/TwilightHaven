"use strict";
// Constructor function for WeekendEvent class
function WeekendEvent(day, time, description) {
    this.day = day; // e.g., "Friday"
    this.time = time; // e.g., "10:00 am"
    this.description = description; // e.g., "Yoga class"
}

// Prototype methods for WeekendEvent
WeekendEvent.prototype.formatTime = function() {
    // Format time to ensure consistency (e.g., "10:00 AM")
    let [hours, minutes] = this.time.split(":");
    let period = "AM";
    hours = parseInt(hours);

    if (hours >= 12) {
        period = "PM";
        if (hours > 12) hours -= 12;
    } else if (hours === 0) {
        hours = 12;
    }

    return `${hours}:${minutes} ${period}`;
};

WeekendEvent.prototype.getEventDetails = function() {
    // Return formatted event details as a string
    return `${this.description} at ${this.formatTime()}`;
};

WeekendEvent.prototype.toTableRow = function() {
    // Return HTML for a table row representing the event
    return `<tr><td>${this.day}</td><td>${this.getEventDetails()}</td></tr>`;
};

WeekendEvent.prototype.isAvailable = function() {
    // Check if the event is in the future (for reusability in other apps)
    const now = new Date();
    const eventDate = new Date();
    const [hours, minutes] = this.time.split(":");
    const period = this.time.includes("pm") ? "PM" : "AM";
    let hour = parseInt(hours);

    if (period === "PM" && hour !== 12) hour += 12;
    if (period === "AM" && hour === 12) hour = 0;

    eventDate.setHours(hour, parseInt(minutes), 0, 0);

    // Adjust date based on day (assuming events are for the current week)
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDay = now.getDay();
    const eventDayIndex = daysOfWeek.indexOf(this.day);
    const dayDiff = eventDayIndex - currentDay;
    eventDate.setDate(now.getDate() + dayDiff);

    return eventDate > now;
};