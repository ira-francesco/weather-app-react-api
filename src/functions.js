export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function convertKm(unit) {
  return `${(unit / 1000).toFixed(1)}`;
}

export function convertfromMphtoKm(unit) {
  return `${(unit * 1.609).toFixed(1)}`;
}

export function clock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  setTimeout(clock, 1000);
  return `${h}:${m}`;
}

export function humidityCheck(humidity) {
  return humidity <= 30
    ? "Low 🟢"
    : humidity > 30 && humidity <= 70
    ? "Medium 🟡"
    : "High 🔴";
}

function padTo2Digits(num) {
  return num.toString().padStart(2, "0");
}

export function convertMsToTime(milliseconds) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  let hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;
  hours = hours % 24;

  return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(
    seconds
  )}`;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
