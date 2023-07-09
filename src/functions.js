export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function clock() {
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  m = checkTime(m);
  setTimeout(clock, 1000);
  return `${h}:${m}`;
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
