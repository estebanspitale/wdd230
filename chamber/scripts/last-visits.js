// Get current date
var currentDate = new Date();

// Get the date of the last visit stored in localStorage
var lastVisitDate = localStorage.getItem("lastVisitDate");

// If it is the user's first visit, show the welcome message
if (!lastVisitDate) {
  document.getElementById("visits").textContent = "Welcome! Let us know if you have any questions.";
}
else {
  // Calculate the time difference in milliseconds
  var timeDiff = currentDate - new Date(lastVisitDate);

  // Convert time difference to days
  var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  // If the day difference is less than 1, it displays the message "Come back so soon! Awesome!"
  if (daysDiff < 1) {
    document.getElementById("visits").textContent = "Back so soon! Awesome!";
  }
  else {
    // Show the message with the number of days passed
    var message = "You last visited " + daysDiff + " day" + (daysDiff === 1 ? "" : "s") + " ago.";
    document.getElementById("visits").textContent = message;
  }
}
// Save current date as last visited in localStorage
localStorage.setItem("lastVisitDate", currentDate);