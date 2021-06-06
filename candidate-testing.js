// const input = require('readline-sync');

// // TODO 2: modify your quiz app to ask 5 questions //

// // TODO 1.1a: Define candidateName // 
// let candidateName = "";
// // TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// // let question;
// // let correctAnswer;
// // let candidateAnswer;
// // let questions;
// // let correctAnswers;
// // let candidateAnswers;
// let question = "Who was the first American woman in space? ";
// let correctAnswer = "Sally Ride";
// let candidateAnswer = " ";
// let questions = ["True or false: 5 kilometer == 5000 meters?  \n   Your Answer:  ", "2) (5 + 3)/2 * 10 = ? \n   Your Answer:  ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? \n   Your Answer:  ", "Who was the first American woman in space? \n   Your Answer:  ", "What is the minimum crew size for the ISS? \n   Your Answer:  "];
// let correctAnswers = ["true", "40", "Trajectory", "Sally Ride", "3"];
// let candidateAnswers = "";
// let cone = "";
// let aone = "";
// let grade = "";
// function askForName() {
//   // TODO 1.1b: Ask for candidate's name //
//   candidateName = input.question("Candidate Name: ");
//   console.log(`Thank you ${candidateName}`)
// }

// function askQuestion() {
//   // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//   //candidateAnswer = input.question(question);
//   // console.log(`Your Answer: ${candidateAnswer} `)
//   // for (i = 0; i < questions.length; i++) {
//   //   let candidateAnswers = input.question(questions[i])
//   // }
//   // let grade = 0;
//   // for (i = 0; i < questions.length; i++) {
//   //   let candidateAnswers = input.question(questions[i]);
//   //   let cone = candidateAnswers.toLowerCase();
//   //   let aone = correctAnswers[i].toLowerCase();
//   //   // console.log(cone + " " + aone)
//   //   if (cone == aone){
//   //     console.log(`${candidateAnswers} is correct!!!!` )
//   //     console.log(`The correct answer: ${correctAnswers[i]}`)
//   //     grade = grade + 1
//   //   } else {
//   //     grade = grade
//   //     console.log(`${candidateAnswers} is incorrect` )
//   //     console.log(`The correct answer: ${correctAnswers[i]}`)
//   //   }
//   //   console.log(`Your score: ${grade}`)
//   // }
// }
// // console.log(candidateAnswers)
// console.log(candidateAnswers)
// // console.log(cone)
// function gradeQuiz(candidateAnswers) {

//   // let cone = candidateAnswers.toLowerCase();
//   //   let aone = correctAnswers[i].toLowerCase();
//   //   // console.log(cone + " " + aone)
//   //   if (cone == aone){
//   //     console.log(`${candidateAnswers} is correct!!!!` )
//   //     console.log(`The correct answer: ${correctAnswers[i]}`)
//   //     grade = grade + 1
//   //   } else {
//   //     grade = grade
//   //     console.log(`${candidateAnswers} is incorrect` )
//   //     console.log(`The correct answer: ${correctAnswers[i]}`)
//   //   }
//   //   console.log(`Your score: ${grade}`)

//   // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//   // console.log(candidateAnswers)
//   grade = 0;
//   for (i = 0; i < questions.length; i++) {

//     // let candidateAnswers = input.question(questions[i]);
//     let cone = candidateAnswers.toLowerCase();
//     let aone = correctAnswers[i].toLowerCase();
//     // console.log(cone + " " + aone)
//     if (cone == aone){
//       // console.log(`${candidateAnswers} is correct!!!!` )
//       console.log(`The correct answer: ${correctAnswers[i]}`)
//       grade = grade + 1
//     } else {
//       // console.log(`${candidateAnswers} is incorrect` )
//       console.log(`The correct answer: ${correctAnswers[i]}`)
//       grade = grade
//     }
//     console.log(`Your score: ${grade}`)
//   }
//   // if (candidateAnswer === correctAnswer) {
//   //   console.log(`${candidateAnswer} is correct!!!!`)
//   //   grade = grade + 1
//   // } else if (candidateAnswer != correctAnswer) {
//   //   console.log(`${candidateAnswer} is incorrect`)
//   // }
//   // for (i = 0; i < questions.length; i++) {
//   // console.log(grade)
   
//   //  console.log(aone) 
    
//     // let aone = correctAnswers[i].toLowerCase();
//   // return grade;
    
//   //   if (cone == aone) {
//   //     grade = grade + 1;
//   //   //console.log(`your answer ${choice}`);
//   //   console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
//   //   } else {
   
//   // //console.log(`your answer ${choice}`);
//   //   console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
//   //   }
//   //   if (cone == aone) {
//   //     grade = grade + 1;
//   //   //console.log(`your answer ${choice}`);
//   //   console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
//   //   } else {
   
//   // //console.log(`your answer ${choice}`);
//   //   console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
//   //   }
//   //   console.log(grade)
//   //   // return grade;
//   // }
//   let grade1 = grade
//   grade = ((grade / 5) * 100);
//   console.log(`Your score: ${grade1}/5 !!!! you got ${grade}% `)
//   console.log(`Your score ${grade1/5} ${(grade1/5)*100}%`)
  
// }
// // console.log(candidateAnswers)
// // console.log(gradeQuiz)
// function runProgram() {
//   askForName();
//   // TODO 1.1c: Ask for candidate's name //
  
//   askQuestion();
//   gradeQuiz(this.candidateAnswers);
//   // console.log("the output is " + gradeQuiz(candidateAnswers))
// }
// // console.log(gradeQuiz)
// //console.log(gradeQuiz(candidateAnswers))
// // console.log(gradeQuiz())
// // console.log("the output is " + gradeQuiz(candidateAnswers))
// // Don't write any code below this line //
// // And don't change these or your program will not run as expected //
// module.exports = {
//   candidateName: candidateName,
//   question: question,
//   correctAnswer: correctAnswer,
//   candidateAnswer: candidateAnswer,
//   questions: questions,
//   correctAnswers: correctAnswers,
//   candidateAnswers: candidateAnswers,
//   gradeQuiz: gradeQuiz,
//   runProgram: runProgram
// };

const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
// let question;
// let correctAnswer;
// let candidateAnswer;
// let questions;
// let correctAnswers;
// let candidateAnswers;
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = " ";
// let questions = ["1) True or false: 5,000 meters = 5 kilometers. \n   Your Answer:  ", "2) (5 + 3)/2 * 10 = ? \n   Your Answer:  ", '3) Given the array [8, "Orbit", "Trajectory", 45], what entry is at index 2? \n   Your Answer:  ', "4) Who was the first American female in space? \n   Your Answer:  ", "5) What is the minimum crew size for the International Space Station (ISS)? \n   Your Answer:  "];
let questions = ["True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "Who was the first American woman in space? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["true", "40", "Trajectory", "Sally Ride", "3"];
let candidateAnswers = [""];
let aone = [];
let cone = [];
let score = ""

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Candidate Name: ");
  console.log(`Thank you ${candidateName}`)
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  // candidateAnswer = input.question(question);
  // console.log(`Your Answer: ${candidateAnswer} `)

  for (i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
  }

}
let per = 0;
let grade = 0;
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  // let grade = 0;
  // if (candidateAnswer === correctAnswer) {
  //   console.log(`${candidateAnswer} is correct!!!!`)
  //   grade = grade + 1
  // } else if (candidateAnswer != correctAnswer) {
  //   console.log(`${candidateAnswer} is incorrect`)
  // }
  // if (canidateanswers[i] === correctAnswers[i]) {
  //   grade = grade + 1
  // console.log(grade)
  // return grade;
  // }
  for (i = 0; i < questions.length; i++) {
  // let candidateAnswers = input.question(questions[i]);
  let cone = candidateAnswers[i].toLowerCase();
  let aone = correctAnswers[i].toLowerCase();
  
  //  console.log(typeof(candidateAnswers));a
// let answerstwo = answers.tolowercase();
// let candidateAnswerstwo = candidateAnswers.tolowercase();
// console.log(answerstwo);
  if (cone == aone) {
    grade = grade + 1;
   //console.log(`your answer ${candidateAnswers}`);
  console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
  } else {
   
  //console.log(`your answer ${candidateAnswers}`);
  console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
  }
}

per = ((grade / 5) * 100);
  return per;
}
// console.log(`>>>> Overall Grade: ${per}% (${grade} of 5 responces correct) <<<<`);
// let status = "?";
// if (per >= 60) {
//   status = "PASSED";
// } else {
//   status = "FAILED";
// }
// console.log(`>>>> STATUS: ${status} <<<<`);

function runProgram() {
  askForName();
  
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  let score = gradeQuiz(this.candidateAnswers);
  
  console.log(`You scored ${grade}/5 you got ${score}%`)
  if (score >= 60) {
  status = "PASSED";
  } else {
  status = "FAILED";
  }
  console.log(`>>>> STATUS: ${status} <<<<`);
  // console.log(aone)
  //console.log(`ane = ${aone } cone = ${cone} candidate answers = [${candidateAnswers}] ${aone == cone}  ${aone===cone}`)
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