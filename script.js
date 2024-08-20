// Set the target date and time for the countdown (September 1, 2024, at midnight)
let countdownDate = new Date("Sep 1, 2024 00:00:00").getTime();

// Create a function that will update the countdown every second
let countdownFunction = setInterval(function() {

  // Get the current date and time in milliseconds
  let now = new Date().getTime();

  // Calculate the remaining time between now and the target date
  let distance = countdownDate - now;

  // Convert the remaining time into days, hours, minutes, and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the HTML elements with the calculated time values
  document.querySelectorAll('.countdown-item')[0].querySelector('.countdown-number').innerHTML = days;
  document.querySelectorAll('.countdown-item')[1].querySelector('.countdown-number').innerHTML = hours;
  document.querySelectorAll('.countdown-item')[2].querySelector('.countdown-number').innerHTML = minutes;
  document.querySelectorAll('.countdown-item')[3].querySelector('.countdown-number').innerHTML = seconds;

  // Check if the countdown is over (i.e., distance is less than 0)
  if (distance < 0) {
    // Stop the countdown
    clearInterval(countdownFunction);
    // Display "EXPIRED" when the countdown reaches zero
    document.querySelector('.countdown').innerHTML = "EXPIRED";
  }
// Repeat the function every 1000 milliseconds (1 second)
}, 1000);
