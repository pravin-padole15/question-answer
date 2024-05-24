import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const questions = [
  "Do you like React?",
  "Is JavaScript your favorite language?",
  "Do you enjoy coding?",
  "Is programming challenging?",
  "Do you want to learn more about web development?",
];

const App = () => {
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [scores, setScores] = useState([]);
  const [averageScore, setAverageScore] = useState(0);

  const handleAnswer = (index, answer) => {
  
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    const yesCount = answers.filter(answer => answer === 'yes').length;
    return (100 * yesCount / questions.length).toFixed(2);
  };

  const handleSubmit = () => {
    const score = parseFloat(calculateScore());
    alert(`Your score is: ${score}`);
    
    const newScores = [...scores, score];

    console.log(newScores)
    setScores(newScores);

    const totalScore = newScores.reduce((acc, score) => acc + score, 0);
    setAverageScore((totalScore / newScores.length).toFixed(2));

    setAnswers(Array(questions.length).fill(null));
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Yes/No Questions</h1>
      {questions.map((question, index) => (
        <div key={index} style={{ marginBottom: '10px' }}>
          <p>{index+1}. {question}</p>
          <button 
            className={answers[index] === 'yes' ? 'selected' : ''} 
            onClick={() => handleAnswer(index, 'yes')}
          >
            Yes
          </button>
          <button 
            className={answers[index] === 'no' ? 'no-selected' : ''} 
            onClick={() => handleAnswer(index, 'no')}
          >
            No
          </button>
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
      <div style={{ marginTop: '20px' }}>
        <h2>Average Score across all runs: {averageScore}</h2>
      </div>
    </div>
  );
};

export default App;