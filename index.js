function shout(str) {
    return str.toUpperCase() // we'll get to this in a sec
  }


function whisper(string) {
    return string.toLowerCase() // we'll get to this in a sec
  }


function logShout(string) {
    console.log (string.toUpperCase());
  }

function logWhisper(string) {
    console.log (string.toLowerCase());
  }



  function sayHiToGrandma(string) {
    var lowercase = string.toLowerCase;
    var uppercase = string.toUpperCase;
    if (string.toLowerCase()) {
      return "I can\'t hear you!"
    }
    if (string.toUpperCase()) {
      return "YES INDEED!"
    }
  }
