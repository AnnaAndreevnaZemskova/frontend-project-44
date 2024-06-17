import playGame from '../index.js';

const getRandomNumber = (max = 0, min = 30) => {
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= (num / 2); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const playPrime = () => {
  const num = getRandomNumber();
  const question = num;
  const correctAnswer = (isPrime(num)) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const startPrime = () => {
  playGame(playPrime, task);
};

export default startPrime;
