function init () {
    const missionAbort = document.getElementById("abortMission");
    missionAbort.addEventListener("click", (event) => {
        if (confirm("Are you sure you want to abort the mission")) {
            missionAbort.innerHTML = "Mission aborted! Space shuttle returning home"
        }
    })
    const button = document.getElementById("liftoffButton");
    button.addEventListener("click", (event) => button.innerHTML = "Houston, we have liftoff")

    const paragraph = document.getElementById("statusReport");

    // Put your code for the exercises here.
}   

window.addEventListener("load", init);
