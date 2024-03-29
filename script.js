let date = document.querySelector("date");
let time = document.querySelector("time");

let additional = 0;

if (
  String(time.innerText).includes("pm") &&
  !String(time.innerText).includes("12")
) {
  additional =
    (Number(String(time.innerText).replace("pm", "")) + 12) * (60 * 60);
} else {
  if (String(time.innerText).includes("pm")) {
    additional = Number(String(time.innerText).replace("pm", "")) * (60 * 60);
  } else {
    if (
      String(time.innerText).includes("am") &&
      !String(time.innerText).includes("12")
    ) {
      additional = Number(String(time.innerText).replace("am", "")) * (60 * 60);
    } else {
      additional = Number(String(time.innerText).replace("am", ""));
    }
  }
}

setInterval(() => {
  diff_time = (new Date(date.innerText) - new Date()) / 1000 + additional;

  if (diff_time > 0) {
    let days = Math.floor(diff_time / (60 * 60 * 24));
    diff_time = diff_time - days * 60 * 60 * 24;
    let hours = Math.floor((diff_time / (60 * 60)) % 24);
    diff_time = diff_time - hours * 60 * 60;
    let minutes = Math.floor(diff_time / 60) % 60;
    let seconds = Math.floor(diff_time % 60);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
  } else {
    document.getElementById("days").innerText = 0;
    document.getElementById("hours").innerText = 0;
    document.getElementById("minutes").innerText = 0;
    document.getElementById("seconds").innerText = 0;
  }
}, 1000);
