#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = (max = 0, min = 30) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

const playGame = (getRoundData, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);

  console.log(task);
  const maxRoundsCount = 3;
  for (let i = 1; i <= maxRoundsCount; i += 1) {
    const [question, correctAnswer] = getRoundData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const playEven = () => {
  const num = getRandomNumber(0, 100);
  const correctAnswer = (isEven(num)) ? 'yes' : 'no';
  return [num, correctAnswer];
};

const startEven = () => {
  playGame(playEven, task);
};

startEven();