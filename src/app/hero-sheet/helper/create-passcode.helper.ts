export function createPasscodeString() {
  const emptyArray = Array(5);
  for (let index = 0; index < emptyArray.length; index++) {
    emptyArray[index] = getRandomInt(10);
  }

  return emptyArray.join('');
}

function getRandomInt(max: number) {
  return Math.floor(Math.random() * max);
}
