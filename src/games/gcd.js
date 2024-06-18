import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const task = 'Find the greatest common divisor of given numbers.';

const getGcd = (x, y) => ((y !== 0) ? getGcd(y, x % y) : x);

const playGcd = () => {
  const first = getRandomNumber();
  const second = getRandomNumber();
  const question = `${first} ${second}`;
  const correctAnswer = getGcd(first, second).toString();
  return [question, correctAnswer];
};
const startGcd = () => {
  playGame(playGcd, task);
};

export default startGcd;
