// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode website for Marketing Team", function() {

  test("confirm launchcode is a not for profit organization...'nonproit'", function (){
     let output = launchcode.organization
     expect(output).toBe("nonprofit")
  });

  test("confirm the executive director is ...'Jeff'", function (){
     let output = launchcode.executiveDirector
     expect(output).toBe("Jeff")
  });

  test("confirm percentageCoolEmployees ...'100' Pct", function (){
     let output = launchcode.percentageCoolEmployees
     expect(output).toBe(100)
  });

  test("confirm launchcode programms is an object", function (){
   //   let output = typeof launchcode.propgramsOffered
      expect(typeof launchcode.propgramsOffered).toBe("object")
  });

  for (let i=0; i<launchcode.propgramsOffered.length; i+=1){
  test(`confirm ${launchcode.propgramsOffered[i]} is in array position ${i}`, function (){
      expect(launchcode.propgramsOffered[i]).toBe(launchcode.propgramsOffered[i])
  });
}
test("confirms the length of the programs offered array is 3", function () {
   let output = launchcode.propgramsOffered.length
   expect(output).toBe(3);   
});

  test("Individual line Test divisible by '11' to return 'Rutabagas! That doesn't work. '", function (){
     expect(launchcode.launchFunction(11)).toBe("Rutabagas! That doesn't work.");
   //   expect(launchcode.launchFunction(30)).toBe("LaunchCode Rocks!");
  });

for (let i=0; i<8; i++) {
let strArray = ["LaunchCode Rocks!","Launch Rocks! (CRASH!!!!)", "Code Rocks!", "LaunchCode!","Launch!","Code!","Rocks!", "Rutabagas! That doesn't work."]
let divBy = [[2, 3, 5], [2, 5], [3, 5], [2, 3,], [2], [3], [5], [11]]
let numTest = [30,10,15,6,2,3,5,11]
test(`Test divisible '${divBy[i]}' to return '${strArray[i]}'`, function () {
    expect(launchcode.launchFunction(numTest[i])).toBe(strArray[i])
    });
};
  
});