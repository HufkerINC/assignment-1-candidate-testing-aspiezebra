const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //

let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
let questions = ["True or false: 5 kilometer == 5000 meters?  \n   Your Answer:  ", "2) (5 + 3)/2 * 10 = ? \n   Your Answer:  ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? \n   Your Answer:  ", "Who was the first American woman in space? \n   Your Answer:  ", "What is the minimum crew size for the ISS? \n   Your Answer:  "];
let correctAnswers = ["true", "40", "Trajectory", "Sally Ride", "3"];
let candidateAnswers = "";
let cone = "";
let aone = "";
function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name: ");
  console.log(`Thank you ${candidateName}`)
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  // candidateAnswer = input.question(question);
  // console.log(`Your Answer: ${candidateAnswer} `)
  // for (i = 0; i < questions.length; i++) {
  //   let candidateAnswers = input.question(questions[i])
  // }
  // let grade = 0;
  // for (i = 0; i < questions.length; i++) {
  //   let candidateAnswers = input.question(questions[i]);
  //   // let cone = candidateAnswers.toLowerCase();
  //   // let aone = correctAnswers[i].toLowerCase();
  //   // // console.log(cone + " " + aone)
  //   // if (cone == aone){
  //   //   console.log(`${candidateAnswers} is correct!!!!` )
  //   //   console.log(`The correct answer: ${correctAnswers[i]}`)
  //   //   grade = grade + 1
  //   // } else {
  //   //   grade = grade
  //   //   console.log(`${candidateAnswers} is incorrect` )
  //   //   console.log(`The correct answer: ${correctAnswers[i]}`)
  //   // }
  //   // console.log(`Your score: ${grade}`)
  // }
}

// console.log(cone)
function gradeQuiz(candidateAnswers) {

  // let cone = candidateAnswers.toLowerCase();
  //   let aone = correctAnswers[i].toLowerCase();
  //   // console.log(cone + " " + aone)
  //   if (cone == aone){
  //     console.log(`${candidateAnswers} is correct!!!!` )
  //     console.log(`The correct answer: ${correctAnswers[i]}`)
  //     grade = grade + 1
  //   } else {
  //     grade = grade
  //     console.log(`${candidateAnswers} is incorrect` )
  //     console.log(`The correct answer: ${correctAnswers[i]}`)
  //   }
  //   console.log(`Your score: ${grade}`)

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  // console.log(candidateAnswers)
  let grade = 0;
  for (i = 0; i < questions.length; i++) {

    let candidateAnswers = input.question(questions[i]);
    let cone = candidateAnswers.toLowerCase();
    let aone = correctAnswers[i].toLowerCase();
    // console.log(cone + " " + aone)
    if (cone == aone){
      console.log(`${candidateAnswers} is correct!!!!` )
      console.log(`The correct answer: ${correctAnswers[i]}`)
      grade = grade + 1
    } else {
      console.log(`${candidateAnswers} is incorrect` )
      console.log(`The correct answer: ${correctAnswers[i]}`)
      grade = grade
    }
    console.log(`Your score: ${grade}`)
  }
  // if (candidateAnswer === correctAnswer) {
  //   console.log(`${candidateAnswer} is correct!!!!`)
  //   grade = grade + 1
  // } else if (candidateAnswer != correctAnswer) {
  //   console.log(`${candidateAnswer} is incorrect`)
  // }
  // for (i = 0; i < questions.length; i++) {
  // console.log(grade)
   
  //  console.log(aone) 
    
    // let aone = correctAnswers[i].toLowerCase();
  // return grade;
    
  //   if (cone == aone) {
  //     grade = grade + 1;
  //   //console.log(`your answer ${choice}`);
  //   console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
  //   } else {
   
  // //console.log(`your answer ${choice}`);
  //   console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
  //   }
  //   if (cone == aone) {
  //     grade = grade + 1;
  //   //console.log(`your answer ${choice}`);
  //   console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
  //   } else {
   
  // //console.log(`your answer ${choice}`);
  //   console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
  //   }
  //   console.log(grade)
  //   // return grade;
  // }
  let per = ((grade / 5) * 100);
  console.log(`Your score: ${grade}/5 !!!! you got ${per}% `)
  console.log(`Your score ${grade/5} ${(grade/5)*100}%`)
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
