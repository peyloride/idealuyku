function tick(){
  let d = new Date();
  let t = setTimeout(tick,60000);

let date = d.getDate();
let hours = d.getHours();
let minutes = d.getMinutes();
let cycle = 4;

document.getElementById("timeSpan").innerHTML = hours + ":" + minutes;

let calculateSleepTime = function(hours, minutes, cycle) {
    let calculatedsleepminute = minutes + 15;
    if (calculatedsleepminute>=60){
      hours++
      calculatedsleepminute = calculatedsleepminute - 60
    }

    let calculatedsleephour = hours + (1.5 * cycle);
    if (calculatedsleephour > 24){
      calculatedsleephour = calculatedsleephour - 24;
    }

    return {calculatedsleephour, calculatedsleepminute};
};

let printCalculatedSleepTime = function () {
  let {calculatedsleephour, calculatedsleepminute} = calculateSleepTime(hours, minutes, cycle);
  if(calculatedsleephour<10){
    document.getElementById("hours").innerHTML = 0 + "" + calculatedsleephour + ":";
  } else {
    document.getElementById("hours").innerHTML = calculatedsleephour + ":";
  }

  if(calculatedsleepminute<10){
      document.getElementById("minutes").innerHTML = 0 + "" + calculatedsleepminute;
  } else {
  document.getElementById("minutes").innerHTML = calculatedsleepminute;
  }

}


document.getElementById('calcBtn').addEventListener('click', function () {

  printCalculatedSleepTime();

});
}

tick();
