$(document).ready(function() {
  setTimeout(setTime, 1000);
});

function setTime() {
  const dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const now = new Date();
  const hour = now.getHours();
  const time = `${checkZero(hour)}:${checkZero(now.getMinutes())}`;
  const date = `${dayList[now.getDay()]}, ${monthList[now.getMonth()]} ${now.getDate()}`;
  $(".bottom .container .calendar p").text(dayList[now.getDay()]);
  $(".bottom .container .calendar h1").text(now.getDate());
  $(".main .left .time h1").text(time);
  $(".main .left .time p").text(date);
}

function checkZero(i) {
  return i < 10 ? `0${i}` : i;
}
