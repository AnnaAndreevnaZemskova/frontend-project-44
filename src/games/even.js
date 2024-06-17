import playGame from '../index.js';

const getRandomNumber = (max = 0, min = 30) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
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

export default startEven;
