/*            
I	1	I
V	5	V
X	10	X
L	50	L
C	100	C
D	500	D
M	1,000	M
I	1,000	_I
V	5,000	_V
X	10,000	_X
L	50,000	_L
C	100,000	_C
D	500,000	_D
M	1,000,000	_M
*/

/* 
IV -> 'I' and 'V'
I is 1
V is 5
 If (1 is smaller than 5 AND I is before V) then 
5 - 1 = 4 
However we can't apply the same thing for roman numeric that after X -> return an error 404 
Same error throw for when V is before one that bigger than it
*/

// const { prompts } = require('inquirer');
import inquirer from 'inquirer';

async function userInput() {
  const input = await inquirer.prompt({
    type: 'input',
    name: 'roman',
    message: 'Enter your roman numeric to be converted',
    default: 'IV',
  })
  return input.roman;
}

const roman = await userInput();



