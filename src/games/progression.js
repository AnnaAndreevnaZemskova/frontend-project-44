import playGame from '../index.js';
import getRandomNumber from '../randomNumber.js';

const task = 'What number is missing in the progression?';

const getProgression = (start = 1, countOfMembers = 5, difference = 2) => {
  const members = [];
  for (let i = 0; i <= (countOfMembers - 1); i += 1) {
    members.push(start + difference * i);
  }
  return members;
};

const playProgression = () => {
  const start = getRandomNumber(0, 10);
  const difference = getRandomNumber(0, 8);
  const countOfMembers = 8;
  const hiddenIndex = getRandomNumber(0, countOfMembers);
  const progression = getProgression(start, countOfMembers, difference);
  const correctAnswer = progression[hiddenIndex - 1].toString();
  progression[hiddenIndex - 1] = '..';
  const question = progression.join(' ').toString();
  return [question, correctAnswer];
};

const startProgression = () => {
  playGame(playProgression, task);
};

export default startProgression;
