"use strict";

function updateClockColor(hour) {
  const clock = document.querySelector(".clock");
  if (6 <= hour && hour < 12) {
    clock.style.backgroundColor = "#FFD700"; // Morning
  } else if (12 <= hour && hour < 16) {
    clock.style.backgroundColor = "#00BFFF"; // Afternoon
  } else if (16 <= hour && hour < 20) {
    clock.style.backgroundColor = "#FF4500"; // Evening
  } else {
    clock.style.backgroundColor = "#1E1E1E"; // Night
    clock.style.color = "white";
  }
}

function startTime() {
  const clock = document.querySelector(".clock");
  const updateInterval = 1000;
  function updateClock() {
    const today = new Date();
    const h = today.getHours();
    const m = today.getMinutes();
    const s = today.getSeconds();
    // Check if the hour has changed before updating color
    if (parseInt(clock.textContent.split(":")[0]) !== h) {
      updateClockColor(h);
    }
    clock.textContent = h + ":" + m + ":" + s;
  }
  // Initially update the clock color and start the interval
  updateClock();
  setInterval(updateClock, updateInterval);
}

startTime();
