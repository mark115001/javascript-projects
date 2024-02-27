// Write your JavaScript code here.
// Remember to pay attention to page loading!

// function init() {
  // function init() {
  window.addEventListener("load", () => {
  const buttonUp = document.getElementById("up");
  const buttonDown = document.getElementById("down");
  const buttonLeft = document.getElementById("left");
  const buttonRight = document.getElementById("right");
  const takeOff = document.getElementById("takeoff");
  const shuttleLand = document.getElementById("landing");
  const shuttleAbort = document.getElementById("missionAbort");
  const shuttleStatus = document.getElementById("flightStatus");
  const miles = document.getElementById("spaceShuttleHeight");
  const bgColor = document.getElementById("shuttleBackground");
  const rocketHeight = document.getElementById("rocket");

  takeOff.addEventListener("click", (event) => {
    let ans = confirm("Confirm shuttle if ready for takeoff");
    if (ans) {
      shuttleStatus.innerHTML = "Shuttle in Flight";
      miles.innerHTML = parseInt(miles.innerHTML) + 10000;
      bgColor.style.background = "blue";
      rocketHeight.style.bottom = rocketHeight.style.bottom + "10px";
    }
  });

  shuttleLand.addEventListener("click", (event) => {
    alert("The shuttle is landing. Landing gear engaged");
    shuttleStatus.innerHTML = "The shuttle has landed";
    rocketHeight.style.bottom = rocketHeight.style.bottom - "10px";
    miles.innerHTML = "0" // parseInt(miles.innerHTML) - parseInt(miles.innerHTML);
    bgColor.style.background = "green"; 
  })

  shuttleAbort.addEventListener("click", (event) => {
    let ans = confirm("Confirm mission abort");
    if (ans) {
      shuttleStatus.innerHTML = "Mission aborted";
      miles.innerHTML = parseInt(miles.innerHTML) + 10000;
      bgColor.style.background = "green";
      miles.innerHTML = "0" //parseInt(miles.innerHTML) - parseInt(miles.innerHTML);
    }
  });


  function moveRocket(direction) {
    if (direction === "up" || direction === "down") {
    let currentPosition = parseInt(rocket.style.bottom);
    let distanceChange = direction === "up" ? 10 : -10;
    let heightChange = direction === "up" ? 10000 : -10000

    rocketHeight.style.bottom = (currentPosition + distanceChange) + "px";
    miles.innerHTML = parseInt(miles.innerHTML) + heightChange;
    } else {
      let currentPosition = parseInt(rocket.style.bottom);
      let horizontalPosition = direction === "left" ? -10 : 10;
      rocket.style.left = (currentPosition + horizontalPosition) + "px";
      }
    }
  

  buttonUp.addEventListener("click", (event) => {
    if (parseInt(miles.innerHTML) > 240000) {
      window.alert("Maximum altitude reached");
    } else {
      // miles.innerHTML = parseInt(miles.innerHTML) + 10000;
      // rocketHeight.style.bottom = rocketHeight.style.bottom + "10px";
      moveRocket("up")
    }
  });
  
  buttonDown.addEventListener("click", (event) => {
    if (parseInt(miles.innerHTML) <= 0) {
      window.alert("Shuttle has landed");
    } else {
      // miles.innerHTML = parseInt(miles.innerHTML) - 10000;
      moveRocket("down")
    }
  });
   
  buttonLeft.addEventListener("click", (event) => {
    // alert("Button Left")
    // rocketHeight.style.right = rocketHeight.style.borderRight + "10px";
    // document.getElementById("rocket").set
    moveRocket("left")
  })
  
  buttonRight.addEventListener("click", (event) => {
    // rocketHeight.style.right = rocketHeight.style.right + "10px";
    // document.getElementById("rocket").style.right = "1px"
    moveRocket("right")
  })

})

