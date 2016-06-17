var timeH1 = document.getElementById('time');
var dateH2 = document.getElementById('date');
var pageContainer = document.getElementById('page-container');
var timeColor = document.getElementById('timeColor');
var dateColor = document.getElementById('dateColor');
var scaleButton = document.getElementById('scale-button');

var scaled = false;
scaleButton.addEventListener('click', setScaled);

setScaled();

function setScaled() {
  scaled = !scaled;
  if (scaled) {
    scaleButton.innerHTML = 'Scale Values: on';
  } else {
    scaleButton.innerHTML = 'Scale Values: off';
  }
}

function updateTime() {
  //The time and date right now.
  var now = new Date();

  //Time varibles
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();

  //Date variables
  var year = now.getFullYear();
  var date = now.getDate();
  var month = now.getMonth() + 1;

  if (hours < 10) {hours = '0' + hours;}
  if (minutes < 10) {minutes = '0' + minutes;}
  if (seconds < 10) {seconds = '0' + seconds;}

  if (date < 10) {date = '0' + date;}
  if (month < 10) {month = '0' + month;}

  var timeHex = '#' + hours + minutes + seconds;
  var dateHex = '#' + year.toString().substring(2, 4) + month + date;
  var infoTextShadow = '0 0px 20px rgba(255, 255, 255, 0.5)';
  var timeTextShadow = '0 0px 14px rgba(255, 255, 255, 0.5)';

  if (scaled) {
    timeHex = scaleColors(hours, minutes, seconds, 'time');
    dateHex = scaleColors(year.toString().substring(2, 4), month, date, 'date');
    infoTextShadow = '0 0px 20px rgba(1, 1, 1, 0.5)';
    timeTextShadow = '0 0px 14px rgba(1, 1, 1, 0.5)';
  }

  var timeString = hours + " : " + minutes + " : " + seconds;
  var dateString = year + " - " + month + ' - ' + date;

  //Set the time and date strings and background color
  pageContainer.style.background = 'radial-gradient(' + timeHex + ' 10%, ' + dateHex + ' 90%)';

  timeH1.innerHTML = timeString;
  timeH1.style.color = timeHex;
  timeH1.style.textShadow = timeTextShadow;

  dateH2.innerHTML = dateString;
  dateH2.style.color = dateHex;
  dateH2.style.textShadow = timeTextShadow;

  timeColor.innerHTML = scaled ? '<strong>Time Color: </strong>' + timeHex + ' (scaled)' : '<strong>Time Color: </strong>' + timeHex;
  timeColor.style.textShadow = infoTextShadow;

  dateColor.innerHTML = scaled ? '<strong>Date Color: </strong>' + dateHex + ' (scaled)' : '<strong>Date Color: </strong>' + dateHex;
  dateColor.style.textShadow = infoTextShadow;

  setTimeout(updateTime, 1000);
}
updateTime();
