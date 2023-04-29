let countdowndate = new Date("May 1, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let datenow = new Date().getTime();

  let datediff = countdowndate - datenow;

  let days = Math.floor(datediff / (1000 * 60 * 60 * 24));

  let hours = Math.floor((datediff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  let minutes = Math.floor((datediff % (1000 * 60 * 60)) / (1000 * 60));

  let seconds = Math.floor((datediff % (1000 * 60)) / 1000);
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  if ((datediff = 0)) {
    clearInterval(counter);
  }
}, 1000);
