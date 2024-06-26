const RANDOM_MIN = 0;
const RANDOM_MAX = 24;
const MIN_RANDOM_PHOTOS = 0;
const MAX_RANDOM_PHOTOS = 10;
const uniqueNumbersSet = new Set();
const getRandomNumber = function(randomMin, randomMax) {
  const lower = Math.ceil(Math.min(randomMin, randomMax));
  const upper = Math.floor(Math.max(randomMin, randomMax));
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (upper - lower + 1) + lower);
  } while (uniqueNumbersSet.has(randomNumber));
  uniqueNumbersSet.add(randomNumber);
  if (uniqueNumbersSet.size === upper - lower + 1) {
    uniqueNumbersSet.clear();
  }
  return randomNumber;

};


export const ComparePhotos = {
  disscused: (photoA,photoB) => {
    const commentLengthA = photoA.comments.length;
    const commentLengthB = photoB.comments.length;

    return commentLengthB - commentLengthA;
  },
  random : (list) => list.map(() => list[getRandomNumber(RANDOM_MIN,RANDOM_MAX)]).slice(MIN_RANDOM_PHOTOS,MAX_RANDOM_PHOTOS)
};


export { getRandomNumber};
