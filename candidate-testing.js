

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
let questions = ["Who was the first American woman in space? ", "True or false: 5 kilometer == 5000 meters? ", "(5 + 3)/2 * 10 = ? ", "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride", "True", "40", "Trajectory", "3"];
let candidateAnswers = [];
let aone = [];
let cone = [];
let score = "";
let per = '';
let grade = "";


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
// per = 0;
// grade = 0;
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  
  grade = 0;
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
    // console.log(candidateAnswers)
    // console.log(candidateAnswers[i])
    let cone = candidateAnswers[i].toLowerCase();
    let aone = correctAnswers[i].toLowerCase();
    // console.log(aone[i])
    // console.log(cone[i])
  //  console.log(typeof(candidateAnswers));a
// let answerstwo = answers.tolowercase();
// let candidateAnswerstwo = candidateAnswers.tolowercase();
// console.log(answerstwo);
    if (cone[i] == aone[i]) {
      grade = grade + 1;
      // console.log(`grade on 79 ${grade}`)
   //console.log(`your answer ${candidateAnswers}`);
      console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
    } else {
      grade = grade
      console.log(`grade on 84 ${grade}`)
  //console.log(`your answer ${candidateAnswers}`);
    console.log(`   Correct Answer: ${correctAnswers[i]} \n \n`);
    }
    // console.log(grade)
    // for(i=0;i<5;i++){
    //   console.log(aone)
    //   console.log(cone)
    //   console.log(candidateAnswers)
    //   console.log(aone[i])
    //   console.log(cone[i])
    //   console.log(candidateAnswers[i])
    // }

}
  // return grade;
  console.log(`grade on 100 ${grade}`)
  per = ((grade/5)*100);
  return per;
}

// console.log(per)
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
  // gradeQuiz(this.candidateAnswers);
  gradeQuiz(this.candidateAnswers)
  let score = gradeQuiz(this.candidateAnswers)
  // console.log(`import124 ${gradeQuiz(candidateAnswers)}`)
  // console.log(`import125 ${gradeQuiz(this.candidateAnswers)}`)
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