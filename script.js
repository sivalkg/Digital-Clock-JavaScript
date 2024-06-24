setInterval(() => {
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");
  h = new Date().getHours();
  m = new Date().getMinutes();
  s = new Date().getSeconds();
  ampm.innerHTML = h >= 12 ? "PM" : "AM";

  if (h >= 12) {
    h = h - 12;
  }

  hours.innerHTML = h < 10 ? "0" + h : h;
  seconds.innerHTML = s < 10 ? "0" + s : s;
  minutes.innerHTML = m < 10 ? "0" + m : m;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;
});
