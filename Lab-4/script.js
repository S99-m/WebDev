const quizQuestions = [
  { question: "What is the capital of Australia?", answer: "canberra" },
  { question: "Which planet is known as the Red Planet?", answer: "mars" },
  { question: "What is cube root of 1728?", answer: "12" },
  { question: "Who is the author of the famous book series Harry Potter?", answer: "j. k. rowling" },
  { question: "What does SQL in computer stand for?", answer: "structured query language" }
];

function runQuiz() {
  let score = 0;

  
  let i = 0; 
    for (i = 0; i < quizQuestions.length; i = i + 1) {
    let currentQuestion = quizQuestions[i].question;
    let correctAnswer = quizQuestions[i].answer;
    let userAnswer = prompt(currentQuestion);
    if (userAnswer !== null) {
      userAnswer = userAnswer.toLowerCase().trim();
    }
    if (userAnswer == correctAnswer.toLowerCase().trim()) {
      alert("Correct!");
      score = score + 1;
    } else {
      alert("Wrong! The correct answer is: ${correctAnswer}");
    }
  }
  alert("Quiz Over! Your final score is ${score} out of ${quizQuestions.length}");
}
runQuiz();