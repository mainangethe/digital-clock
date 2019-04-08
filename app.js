function getTime() {
  const fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  // cache the dom
  hours_span = document.getElementById('hours');
  minutes_span = document.getElementById('minutes');
  seconds_span = document.getElementById('seconds');

  if (hours < 10) {
    hours = "0" + hours;
  }

  else if (minutes < 10) {
    minutes = "0" + minutes;
  }
  else if (seconds < 10) {
    seconds = "0" + seconds;
  }
  hours_span.innerHTML = hours;
  minutes_span.innerHTML = minutes;
  seconds_span.innerHTML = seconds;
}

setInterval(getTime, 1000);
