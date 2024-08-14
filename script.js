
let countdownDate = new Date("Sep 1, 2024 00:00:00").getTime();


let countdownFunction = setInterval(function() {


  let now = new Date().getTime();

  
  let distance = countdownDate - now;

  
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  document.querySelectorAll('.countdown-item')[0].querySelector('.countdown-number').innerHTML = days;
  document.querySelectorAll('.countdown-item')[1].querySelector('.countdown-number').innerHTML = hours;
  document.querySelectorAll('.countdown-item')[2].querySelector('.countdown-number').innerHTML = minutes;
  document.querySelectorAll('.countdown-item')[3].querySelector('.countdown-number').innerHTML = seconds;

  
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.querySelector('.countdown').innerHTML = "EXPIRED";
  }
}, 1000);
