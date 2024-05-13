function times() {
  var a = 0;

  setInterval(function () {
    a = a + Math.floor(Math.random() * 20);
    if (a < 100) {
      document.querySelector(" .student p").innerHTML = a + "+";
    } else {
      a = 100;
      document.querySelector(" .student p").innerHTML = a + "+";
    }
  }, 150);
}
function timem() {
  var a = 0;

  setInterval(function () {
    a = a + Math.floor(Math.random() * 500);
    if (a < 3000) {
      document.querySelector(" .members p").innerHTML = a + "+";
    } else {
      a = 3000;
      document.querySelector(" .members p").innerHTML = a + "+";
    }
  }, 150);
}
function timec() {
  var a = 0;

  setInterval(function () {
    a = a + Math.floor(Math.random() * 5);
    if (a < 15) {
      document.querySelector(" .chapters p").innerHTML = a + "+";
    } else {
      a = 15;
      document.querySelector(" .chapters p").innerHTML = a + "+";
    }
  }, 150);
}
function timee() {
  var a = 0;

  setInterval(function () {
    a = a + Math.floor(Math.random() * 500);
    if (a < 2500) {
      document.querySelector(" .events p").innerHTML = a + "+";
    } else {
      a = 2500;
      document.querySelector(" .events p").innerHTML = a + "+";
    }
  }, 150);
}
timec();
timee();
timem();
times();

document
  .querySelector(".btn button")
  .addEventListener("mouseenter", function () {
    gsap.from(".btn button", {
      y: 10,
    });
  });
document
  .querySelector(".btn button")
  .addEventListener("mouseleave", function () {
    gsap.from(".btn button", {
      y: 0,
    });
  });
document
  .querySelector(".event1 h2,.event1 p")
  .addEventListener("mouseenter", function () {
    gsap.from(".event1 h2,.event1 p", {
      x: 10,
      duration: 1,
      delay: 1,
    });
  });
document
  .querySelector(".event1 h2,.event1 p")
  .addEventListener("mouseleave", function () {
    gsap.from(".event1 h2,.event1 p", {
      x: 0,
      duration: 1,
      delay: 1,
    });
  });
document
  .querySelector(".event2 h2,.event2 p")
  .addEventListener("mouseenter", function () {
    gsap.from(".event2 h2,.event2 p", {
      x: 10,
      duration: 1,
      delay: 1,
    });
  });
document
  .querySelector(".event2 h2,.event2 p")
  .addEventListener("mouseleave", function () {
    gsap.from(".event2 h2,.event2 p", {
      x: 0,
      duration: 1,
      delay: 1,
    });
  });
