$(document).ready(function() {
  setInterval(setTime, 1000);
});

function setTime() {
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const now = new Date();
  const hour = now.getHours();
  const time = `${hour % 12}:${checkZero(now.getMinutes())} ${hour >= 12 ? 'PM' : 'AM'}`;
  const date = `${dayList[now.getDay()]}, ${monthList[now.getMonth()]} ${now.getDate()}`;
  $(".bottom .container .calender p").text(dayList[now.getDay()]);
  $(".bottom .container .calender h1").text(now.getDate());
  $(".main .left .time h1").text(time);
  $(".main .left .time p").text(`${now.toLocaleDateString()} ${now.toLocaleTimeString()}`);
}

function checkZero(i) {
  return i < 10 ? `0${i}` : i;
}
