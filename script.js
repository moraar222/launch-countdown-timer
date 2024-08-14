// script.js

// Set the date we're counting down to
let countdownDate = new Date("Sep 1, 2024 00:00:00").getTime();

// Update the countdown every 1 second
let countdownFunction = setInterval(function() {

  // Get the current date and time
  let now = new Date().getTime();

  // Find the difference between now and the countdown date
  let distance = countdownDate - now;

  // Time calculations for days, hours, minutes, and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the results in the respective HTML elements
  document.querySelectorAll('.countdown-item')[0].querySelector('.countdown-number').innerHTML = days;
  document.querySelectorAll('.countdown-item')[1].querySelector('.countdown-number').innerHTML = hours;
  document.querySelectorAll('.countdown-item')[2].querySelector('.countdown-number').innerHTML = minutes;
  document.querySelectorAll('.countdown-item')[3].querySelector('.countdown-number').innerHTML = seconds;

  // If the countdown is over, display "EXPIRED"
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector('.countdown').innerHTML = "EXPIRED";
  }
}, 1000);
