const express = require('express')
const routes = express.Router()
const bodyParser = require('body-parser');
routes.use(bodyParser.urlencoded({ extended: true }));



routes.get('/kuis', (req, res) => {
    res.send('Hello kuis!')
})

let questions = [
    { id: 1, question: 'Apa aksara Korea untuk huruf "ㅇ"?', answer: 'ng' },
    { id: 2, question: 'Apa aksara Korea untuk huruf "ㄱ"?', answer: 'g' },
    { id: 3, question: 'Apa aksara Korea untuk huruf "ㅏ"?', answer: 'a' },
    { id: 4, question: 'Apa aksara Korea untuk huruf "ㄷ"?', answer: 'd' },
    { id: 5, question: 'Apa aksara Korea untuk huruf "ㅅ"?', answer: 's' }
];
  
let score = 0;
let lastQuestionId = null;

function getRandomQuestion() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questions.length);
  } while (questions[randomIndex].id === lastQuestionId);

  const randomQuestion = questions[randomIndex];
  lastQuestionId = randomQuestion.id;
  return randomQuestion;
}

routes.get('/soal', (req, res) => {
  const randomQuestion = getRandomQuestion();
  res.json(randomQuestion);
});

// function getRandomQuestion() {
//     const randomIndex = Math.floor(Math.random() * questions.length);
//     return questions[randomIndex];
// }


// routes.get('/random', (req, res) => {
//     res.json(getRandomQuestion());
// });
  

routes.post('/quiz', (req, res) => {
    const { id, userAnswer } = req.body;
    const question = questions.find(q => q.id === parseInt(id));
  
    if (!question) {
      return res.status(404).json({ error: 'Pertanyaan tidak ditemukan' });
    }
  
    const isAnswerCorrect = question.answer.toLowerCase() === userAnswer.toLowerCase();
    const questionScore = isAnswerCorrect ? 10 : 0;
    score += questionScore;
  
    const randomQuestion = getRandomQuestion();
  
    res.json({ isCorrect: isAnswerCorrect, score: score, nextQuestion: randomQuestion });
});

// let questions = [
//   { id: 1, question: 'Apa aksara Korea untuk huruf "ㅇ"?', answer: 'ieung' },
//   { id: 2, question: 'Apa aksara Korea untuk huruf "ㄱ"?', answer: 'giyeok' },
//   { id: 3, question: 'Apa aksara Korea untuk huruf "ㅏ"?', answer: 'ah' }
// ];

// routes.get('/soal', (req, res) => {
//     res.json(questions);
// });
  

// routes.post('/quiz', (req, res) => {
//   const { id, userAnswer } = req.body;
//   const question = questions.find(q => q.id === parseInt(id));

//   if (!question) {
//     return res.status(404).json({ error: 'Pertanyaan tidak ditemukan' });
//   }

//   const isAnswerCorrect = question.answer.toLowerCase() === userAnswer.toLowerCase();
//   const score = isAnswerCorrect ? 10 : 0;

//   res.json({ isCorrect: isAnswerCorrect, score: score });
// });


module.exports = routes