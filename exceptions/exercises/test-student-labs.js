function gradeLabs(labs) {
  for (let i=0; i < labs.length; i++) {
    let lab = labs[i];
    //let result = lab.runLab(3);
    //if (result !== 27) {
      //   throw (`Invalid code for student ${lab.student}`)
      // } else {
        //   console.log(`${lab.student} code worked: ${result === 27}`);
        //   } // end if/throw
        // } // end for result
       //end function
        
        try {
          let result = lab.runLab(3);
          console.log(`${lab.student} code worked: ${result === 27}`);
        } catch(TypeError) {
            console.log(`TypeError: grade function not found for student ${lab.student}`)
        } //end try/catch
    } //end for
  } //end function

let studentLabs = [
  {
    student: 'Carly',
    runLab: function (num) {
        return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function (num) {
        return num * num;
    }
  }
];

let studentLabs2 = [
  {
      student: 'Blake',
      myCode: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Jessica',
      runLab: function (num) {
        return Math.pow(num, num);
      }
  },
  {
      student: 'Mya',
      runLab: function (num) {
        return num * num;
      }
  }
];

// gradeLabs(studentLabs);
gradeLabs(studentLabs2);
