// JavaScript Document
window.onload = function() {
  var appendHours = document.getElementById("hours");
  var appendMinutes = document.getElementById("minutes");
  var appendSeconds = document.getElementById("seconds");
  var appendMilliseconds = document.getElementById("milliseconds");

  var appendSplits = document.getElementById("splits");

  var startBtn = document.getElementById("start");
  var pauseBtn = document.getElementById("pause");
  var clearBtn = document.getElementById("clear");
  var splitBtn = document.getElementById("split");

  var Interval;

  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var milliseconds = 0;
  var splits = [];

  function Timer() {
    milliseconds++;

    // milliseconds
    if (milliseconds < 10) {
      appendMilliseconds.innerHTML = "0" + milliseconds;
    } else {
      appendMilliseconds.innerHTML = milliseconds;
    }

    // seconds
    if (milliseconds === 99) {
      milliseconds = 0;
      seconds++;

      if (seconds < 10) {
        appendSeconds.innerHTML = "0" + seconds;
      } else {
        appendSeconds.innerHTML = seconds;
      }
    }

    // minutes
    if (seconds === 59) {
      seconds = 0;
      minutes++;

      if (minutes < 10) {
        appendMinutes.innerHTML = "0" + minutes;
      } else {
        appendMinutes.innerHTML = minutes;
      }
    }

    // hours
    if (minutes === 59) {
      minutes = 0;
      hours++;

      if (hours < 10) {
        appendHours.innerHTML = "0" + hours;
      } else {
        appendHours.innerHTML = hours;
      }
    }
  }

  // controls functions
  function Start() {
    clearInterval(Interval);
    Interval = setInterval(Timer, 10);
  }

  function Pause() {
    clearInterval(Interval);
  }

  function Clear() {
    clearInterval(Interval);
    milliseconds = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    splits = [];

    appendHours.innerHTML = hours;
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendMilliseconds.innerHTML = milliseconds;

    appendSplits.innerHTML = splits;
  }

  function Split() {
    splits.push(
      appendHours.innerHTML +
        ":" +
        appendMinutes.innerHTML +
        ":" +
        appendSeconds.innerHTML +
        ":" +
        appendMilliseconds.innerHTML
    );
    appendSplits.innerHTML += "<li>" + splits.pop() + "</li>";
  }

  startBtn.onclick = function() {
    Start();
  };
  pauseBtn.onclick = function() {
    Pause();
  };
  clearBtn.onclick = function() {
    Clear();
  };
  splitBtn.onclick = function() {
    Split();
  };
};
