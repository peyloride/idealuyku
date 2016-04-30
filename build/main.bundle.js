"use strict";

function tick() {
  var d = new Date();
  var t = setTimeout(tick, 60000);

  var date = d.getDate();
  var hours = d.getHours();
  var minutes = d.getMinutes();
  var cycle = 4;

  document.getElementById("timeSpan").innerHTML = hours + ":" + minutes;

  var calculateSleepTime = function calculateSleepTime(hours, minutes, cycle) {
    var calculatedsleepminute = minutes + 15;
    if (calculatedsleepminute >= 60) {
      hours++;
      calculatedsleepminute = calculatedsleepminute - 60;
    }

    var calculatedsleephour = hours + 1.5 * cycle;
    if (calculatedsleephour > 24) {
      calculatedsleephour = calculatedsleephour - 24;
    }

    return { calculatedsleephour: calculatedsleephour, calculatedsleepminute: calculatedsleepminute };
  };

  var printCalculatedSleepTime = function printCalculatedSleepTime() {
    var _calculateSleepTime = calculateSleepTime(hours, minutes, cycle);

    var calculatedsleephour = _calculateSleepTime.calculatedsleephour;
    var calculatedsleepminute = _calculateSleepTime.calculatedsleepminute;

    if (calculatedsleephour < 10) {
      document.getElementById("hours").innerHTML = 0 + "" + calculatedsleephour + ":";
    } else {
      document.getElementById("hours").innerHTML = calculatedsleephour + ":";
    }

    if (calculatedsleepminute < 10) {
      document.getElementById("minutes").innerHTML = 0 + "" + calculatedsleepminute;
    } else {
      document.getElementById("minutes").innerHTML = calculatedsleepminute;
    }
  };

  document.getElementById('calcBtn').addEventListener('click', function () {

    printCalculatedSleepTime();
  });
}

tick();
