
function launchOutput(num)  {
    //Order matters
    if (num % 2 === 0 && num %3 === 0 && num %5 === 0) {
        wordStr = "LaunchCode Rocks!"
    } else if (num % 2 === 0 && num %5 === 0) {
        wordStr = "Launch Rocks! (CRASH!!!!)"
    } else if (num % 3 === 0 && num %5 === 0) {
        wordStr = "Code Rocks!"
    } else if (num % 2 === 0 && num %3 === 0) {
        wordStr = "LaunchCode!"
    } else if (num % 2 === 0) {
        wordStr =  "Launch!"
    } else if (num % 3 === 0) {
        wordStr =  "Code!"
    } else if (num % 5 === 0) {
        wordStr =  "Rocks!"
    } else if (num % 2 !== 0 && num % 3 !== 0 && num % 5 !== 0) {
        wordStr = "Rutabagas! That doesn't work."
    } else {
        wordStr = "This test fails becuase nothing matched!"
    }

    return wordStr

}

// let launchOutput;

let launchcode = {
    organization: "nonprofit",
    executiveDirector: "Jeff",
    percentageCoolEmployees: 100,
    propgramsOffered: ["Web Development", "Data Analysis", "Liftoff"],
    launchFunction: launchOutput,
}

module.exports = launchcode;

