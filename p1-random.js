/*
Description: CIT 281 project 1 
Name: Ileana Matthews
*/
function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function generateRandomString() {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const minLength = 5;
  const maxLength = 25;
  const length = getRandomInteger(minLength, maxLength + 1); // Adding 1 to include the upper bound

  let result = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInteger(0, alphabet.length);
    result += alphabet.charAt(randomIndex);
  }

  return result;
}
console.log(generateRandomString());
