const winner = require('../RPS')

describe("checking for who won the rock, paper, scissors game", function(){

    test("player 1 did not enter an expected response",function(){
        let output = winner("1","rock")
        expect(output).toBe("Player 1 did not enter an expected choice...try again")
    })

    test("player 2 did not enter an expected response",function(){
        let output = winner("rock","2")
        expect(output).toBe("Player 2 did not enter an expected choice...try again")
    })

    test("there was a tie",function(){
        let output = winner("rock","rock")
        expect(output).toBe("TIE!")
    })

    test("Player 2 wins if P1 = rock and P2 = paper",function(){
        let output = winner("rock", "paper")
        expect(output).toBe("Player 2 wins!")
    })

    test("Player 2 wins if P1 = paper and P2 = scissors",function(){
        let output = winner("paper", "scissors")
        expect(output).toBe("Player 2 wins!")
    })

    test("Player 2 wins if P1 = scissors and P2 = rock",function(){
        let output = winner("scissors", "rock")
        expect(output).toBe("Player 2 wins!")
    })
})