function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}

function logShout(string) {
  console.log(string.toUpperCase());
}

function logWhisper(string) {
  console.log(string.toLowerCase());
}

<<<<<<< HEAD

function sayHiToGrandma(string) {
  if (string === string.toLowerCase()) {
    return 'I can\'t hear you!';
  }
  if (string === string.toUpperCase()) {
    return 'YES INDEED!';
  }
  if (string === 'I love you, Grandma.') {
    return 'I love you, too.';
=======
function sayHiToGrandma(string) {
  if (sayHiToGrandma(string) === lowercase) {
    return "I can't hear you!";
  }
  if (string === uppercase) {
    return "YES INDEED!";
  }
  if (string === "I love you, Grandma.") {
    return "I love you, too.";
>>>>>>> fc9f5423091e08a3bb8d91d0e7fffef491caf9e5
  }
}