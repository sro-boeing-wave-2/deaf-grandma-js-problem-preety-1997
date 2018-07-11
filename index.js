/**
 * @fileOverview Contains logic of Deaf Grandma
 */
const isUppercase = require('./isUpperCase');
const getRandomValue = require('./getRandomValue');
const { prompt, print } = require('./prompt-print');

/**
 * Put all the code here which would facilitate your conversation
 * with the Deaf Grandma.
 *
 * You can make use of the
 * 1. prompt function to get input from the user
 * 2. print function to print text on to the console
 */
let count = 0;
print('What do you want to say to Grandma!!');
const str = 'NO, NOT SINCE ';
while (count < 3) {
  const message = prompt();
  if (message === 'BYE') {
    print(str.concat(getRandomValue(1930, 1950)));
    count += 1;
    if (count === 2) {
      break;
    }
  } else if (isUppercase(message)) {
    print(str.concat(getRandomValue(1930, 1950)));
  } else {
    print('HUH?! SPEAK UP, SONNY!');
  }
}
