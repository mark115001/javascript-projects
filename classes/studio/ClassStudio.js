//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores){
        this.name = name
        this.mass = mass
        this.scores = scores
    }
    newScore(score) {
        this.scores.push(score)
    }
    average() {
        let sum = 0
        for (let score of this.scores){
            sum += Number(score)
        }
        return (sum / this.scores.length).toFixed(1)
    }
    admitted() {
        let statusAvg = this.average()
        if (statusAvg > 89 ){
            return this.status = "Accepted"
        }else if(statusAvg > 79) {
            return this.status = "Reserve"
        }else if (statusAvg > 69) {
            return this.status = "Probationary"
        } else
            return this.status = "Rejected"

        }
    }


let cc1 = new CrewCandidate("Bubba Bear", 135, [88, 85, 90])
let cc2 = new CrewCandidate("Merry Maltese", 1.5, [93,88,97])
let cc3 = new CrewCandidate("Glad Gator", 225, [75,78,62])
candidateArray = [cc1,cc2,cc3]
console.log()
for (candidate of candidateArray){
    console.log(`'${candidate.name}' earned an average test store of '${candidate.average()}%' and has a status of '${candidate.admitted()}'.`)
}
//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.

//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%. 

let counter80 = 0
let newAvg = 0
while (cc3.average() < 80) {
    cc3.newScore(100)
    newAvg = cc3.average()
    counter80 +=1
}

let counter90 = counter80
while (cc3.average() < 90) {
    cc3.newScore(100)
    newAvg = cc3.average()
    counter90 +=1
}
console.log(`
With perfect test scores of '100%', Glad Gater will need '${counter80}' tests to reach Reserve status and '${counter90}' tests to reach Accepted status. `)