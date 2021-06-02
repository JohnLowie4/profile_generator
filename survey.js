const { setPriority } = require('os');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let description = "";

rl.question('What\'s your name? ', 'resume', (answer) => {
  description += answer;
  activity();
});

const activity = () => {
  rl.question('What\'s an activity you like doing? ', (answer) => {
    description += ` loves ${answer}`;
    music();
  });
};

const music = () => {
  rl.question('What do you listen to while doing that? ', (answer) => {
    description += ` while listening to ${answer},`;
    meal();
  });
};

const meal = () => {
  rl.question('Which meal is your favourite? ', (answer) => {
    food(answer);
  });
};

const food = (meal) => {
  rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
    description += ` eating ${answer} at ${meal},`;
    sport();
  });
};

const sport = () => {
  rl.question('Which sport is your absolute favourite? ', (answer) => {
    description += ` prefers ${answer} over any other sports,`;
    superpower();
  });
};

const superpower = () => {
  rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
    description += ` and is amazing at ${answer}.`;
    console.log(description);
    rl.close();
  });
};