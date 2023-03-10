import roman from './src/roman.js';
import {menu, promptUser} from './src/prompt.js';

const toInterger = async () => {
  let pattern = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/
  const input = await promptUser();
  const validRoman = pattern.test(input);
  if(!validRoman) {
    console.log("Invalid Roman");
    return toInterger();
  }
  const inputArr = input.split('')
  const convertionResult = inputArr.reduce((accumulator, currentValue, index, arr) => {
    const current = roman[currentValue];
    const next = roman[arr[index + 1]];
    if (current < next) {
      return accumulator += current*-1
    }
    return accumulator += current;
  },0)
  return {input, convertionResult};
} 

async function userChoices() {
  const choice = await menu();
  switch (choice) {
    case 'Convert Roman to Interger':
      const {input, convertionResult} = await toInterger();
      console.log(`\n${input} is ${convertionResult}\n`);
      userChoices();
      break;
  
    default:
      break;
  }
}

userChoices();





