import inquirer from 'inquirer';

async function menu() {
  const choices = await inquirer.prompt(
    {
      type: 'list',
      name: 'menu',
      message: 'Choose one of the action below',
      choices: ['Convert Roman to Interger', 'Quit'],
    }
  )
  return choices.menu;
}

async function promptUser() {
  const input = await inquirer.prompt(
    {
    type: 'input',
    name: 'roman',
    message: 'Enter your roman numeric to be converted',
    default: 'IV',
    }
  )
  return input.roman;
}

export {menu, promptUser};