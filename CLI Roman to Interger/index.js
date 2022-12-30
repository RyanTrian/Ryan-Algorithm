/* 
IV -> 'I' and 'V'
I is 1
V is 5
 If (1 is smaller than 5 AND I is before V) then 
5 - 1 = 4 
However we can't apply the same thing for roman numeric that after X -> return an error 404 
Same error throw for when V is before one that bigger than it
*/

import roman from './src/roman.js';
import {menu, promptUser} from './src/prompt.js';

const toInterger = async () => {
  const input = await promptUser();
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





