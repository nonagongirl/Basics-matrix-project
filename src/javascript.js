function changeName() {
  let name = prompt("Welcome... before you sit down, what's your name?");
  name = name.toLowerCase();
  let addressMe2 = document.querySelector("h2");
  let addressMe = document.querySelector("#morphS2");
  if (name === "neo") {
    alert("WHAT?! Oh em gee... *Morpheus squeal* You are The One!");
  } else {
    addressMe.innerHTML = `You have to let it all go, ${name}. Fear, doubt, and disbelief. Free your mind.`;
    addressMe2.innerHTML = `Welcome, ${name}.`;
  }
}
changeName();

function redPictureChange() {
  document.getElementById("theImage").src = "/media/neowake.jpg";
}
function bluePictureChange() {
  document.getElementById("theImage").src = "/media/happy-agent-smith.jpg";
}
function denial() {
  let check = prompt("Are you sure you want to do this?");
  let changeTextBlue = document.querySelector("#morphS2");
  let changeTextBlue2 = document.querySelector("h2");
  let changeTextBlue3 = document.querySelector("#returnHome");
  check = check.toLowerCase();
  if ((check === "yes", "yeah", "ja", "oui", "yea", "yus", "yep")) {
    changeTextBlue.innerHTML = `Back to sleep you go, you're no longer a threat. You've made Agent Smith very happy, so that's nice. Sweet dreams!`;
    changeTextBlue2.innerHTML = `...You chose the Blue Pill`;
    changeTextBlue3.innerHTML = `<a href="/index.html" title="Contact">
        I made a mistake... take me back
      </a>`;
    bluePictureChange();
    goAway();
  } else {
    alert("Ok... you can choose again 🙄");
  }
}
function wakeUp() {
  let check = prompt("Are you sure you want to do this?");
  let changeTextRed = document.querySelector("#morphS2");
  let changeTextRed2 = document.querySelector("h2");
  let changeTextRed3 = document.querySelector("#returnHome");
  check = check.toLowerCase();
  if ((check === "yes", "yeah", "ja", "oui", "yea", "yus", "yep")) {
    changeTextRed.innerHTML = `Congratulations, you're awake! You gots yourself into the real world, unplugged and covered in goop! Come and help us take down the machines!`;
    changeTextRed2.innerHTML = `...You chose the Red Pill`;
    changeTextRed3.innerHTML = `<a href="/index.html" title="Contact">
        I made a mistake... take me back
      </a>`;
    redPictureChange();
    goAway();
  } else {
    alert("Ok... you can choose again 🙄");
  }
}

function goAway() {
  var m1 = document.getElementById("morphS1");
  m1.remove();
  var m3 = document.getElementById("morphS3");
  m3.remove();
  var butt = document.getElementById("buttons");
  butt.remove();
}

let bluePill = document.querySelector(".bButton");
bluePill.addEventListener("click", denial);
let redPill = document.querySelector(".rButton");
redPill.addEventListener("click", wakeUp);
