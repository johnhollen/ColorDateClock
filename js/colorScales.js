//Credit to https://gist.github.com/lrvick/2080648
RGBToHex = function(r,g,b){
    var bin = r << 16 | g << 8 | b;
    return (function(h){
        return new Array(7-h.length).join('0')+h
    })(bin.toString(16).toUpperCase())
}

/*********************************/

var scaleConstants = {
  YEAR: 2.57575757576,
  MONTH: 21.25,
  DATE: 8.22580645161, //Making it simple, 31 is the highest
  HOURS: 11.0869565217,
  MINUTES: 4.32203389831,
  SECONDS: 4.32203389831
}

function scaleColors(hexPart1, hexPart2, hexPart3, timeOrDate) {
  var red, green, blue = 0;
  
  if (timeOrDate === 'time') {
    red = Math.round(parseInt(hexPart1) * scaleConstants.HOURS);
    green = Math.round(parseInt(hexPart2) * scaleConstants.MINUTES);
    blue = Math.round(parseInt(hexPart3) * scaleConstants.SECONDS);
  } else {
    red = Math.round(parseInt(hexPart1) * scaleConstants.YEAR);
    green = Math.round(parseInt(hexPart2) * scaleConstants.MONTH);
    blue = Math.round(parseInt(hexPart3) * scaleConstants.DATE);
  }

  return '#' + RGBToHex(red, green, blue).toLowerCase();
}
