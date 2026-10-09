let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let wm = document.getElementById('w_minutes');
let ws = document.getElementById('w_seconds');

let bm = document.getElementById('b_minutes');
let bs = document.getElementById('b_seconds');

let workMinutesInput = document.getElementById('work-minutes-input');
let breakMinutesInput = document.getElementById('break-minutes-input');
let workMinutes;
let breakMinutes;
let isFresh = true;   // true = next Start begins a brand-new run
let workDone = false;   // true once the work session has beeped (so it beeps only once)


//store a reference to a timer variable
let startTimer;

start.addEventListener('click', function () {
  if (startTimer === undefined) {
    if (isFresh) {
      // --- fresh run only: load the input into the display ---
      workMinutes = getValidMinutes(workMinutesInput);
      wm.innerText = workMinutes;
      ws.innerText = "00";
      breakMinutes = getValidMinutes(breakMinutesInput);
      bm.innerText = breakMinutes;
      bs.innerText = "00";
      isFresh = false;        // from now on, Start = resume
    }
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already running");
  }
})

reset.addEventListener('click', function () {
  workMinutes = getValidMinutes(workMinutesInput);   // read input fresh
  wm.innerText = workMinutes;
  ws.innerText = "00";

  breakMinutes = getValidMinutes(breakMinutesInput);
  bm.innerText = breakMinutes; bs.innerText = "00";

  document.getElementById('counter').innerText = 0;
  stopInterval();
  startTimer = undefined;
  isFresh = true;             // ← next Start is a fresh run again
  workDone = false;   // ← re-arm after reset
})

stop.addEventListener('click', function () {
  stopInterval()
  startTimer = undefined;
})


//Start Timer Function
function timer() {
  //Work Timer Countdown
  if (ws.innerText != 0) {
    ws.innerText--;
  } else if (wm.innerText != 0 && ws.innerText == 0) {
    ws.innerText = 59;
    wm.innerText--;
  }

  //Signal once when the work session ends
  if (wm.innerText == 0 && ws.innerText == 0 && workDone === false) {
    beep();
    workDone = true;   // flip it so it won't beep again during the break
  }

  //Break Timer Countdown
  if (wm.innerText == 0 && ws.innerText == 0) {
    if (bs.innerText != 0) {
      bs.innerText--;
    } else if (bm.innerText != 0 && bs.innerText == 0) {
      bs.innerText = 59;
      bm.innerText--;
    }
  }

  //Increment Counter by one if one full cycle is completed
  if (wm.innerText == 0 && ws.innerText == 0 && bm.innerText == 0 && bs.innerText == 0) {
    wm.innerText = workMinutes;
    ws.innerText = "00";

    bm.innerText = breakMinutes;
    bs.innerText = "00";

    document.getElementById('counter').innerText++;
    workDone = false;
  }
}

//Beep Sound Function
function beep() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);
  gainNode.gain.setValueAtTime(0, ctx.currentTime);
  gainNode.gain.linearRampToValueAtTime(0.15, ctx.currentTime + 0.05);
  gainNode.gain.linearRampToValueAtTime(0, ctx.currentTime + 0.5);
  oscillator.type = "sine";
  oscillator.frequency.value = 440;        // pitch (Hz) — higher = shriller
  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.5);  // beep lasts 0.5 seconds
}

//Read an input, clamp it to 1–60 whole minutes, and reflect the fix back
function getValidMinutes(inputField) {
  let value = Math.floor(Number(inputField.value));
  if (isNaN(value) || value < 1) {
    value = 1;
  } else if (value > 60) {
    value = 60;
  }
  inputField.value = value;   // correct the box so the user sees what was used
  return value;
}


//Stop Timer Function
function stopInterval() {
  clearInterval(startTimer);
}