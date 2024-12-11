const chalk = require("chalk");
const readline = require("readline-sync");

const questions = {
  classes: [
    {
      question: "What keyword is used to define a class in JavaScript?",
      options: ["A. class", "B. function", "C. constructor", "D. object"],
      answer: "A",
    },
  ],
  callbacks: [
    {
      question: "What is a callback function?",
      options: [
        "A. A function passed as an argument to another function",
        "B. A function that returns another function",
        "C. A function that calls itself",
        "D. All of the above",
      ],
      answer: "A",
    },
  ],
  filter: [
    {
      question: "What does the `filter` method do?",
      options: [
        "A. Modifies the original array",
        "B. Returns a new array with elements that pass a test",
        "C. Returns the first matching element",
        "D. Sorts the array",
      ],
      answer: "B",
    },
  ],
  reduce: [
    {
      question: "What does the `reduce` method return?",
      options: [
        "A. A single value",
        "B. A new array",
        "C. A modified array",
        "D. The last element",
      ],
      answer: "A",
    },
  ],
  foreach: [
    {
      question: "What does `forEach` do?",
      options: [
        "A. Modifies the original array",
        "B. Iterates over elements but does not return a value",
        "C. Returns a new array",
        "D. Combines elements into a single value",
      ],
      answer: "B",
    },
  ],
  map: [
    {
      question: "What does the `map` method return?",
      options: [
        "A. A single value",
        "B. A new array",
        "C. A sorted array",
        "D. None of the above",
      ],
      answer: "B",
    },
  ],
  objects: [
    {
      question: "How do you access a property of an object?",
      options: [
        "A. object.property",
        "B. object[property]",
        "C. Both A and B",
        "D. None of the above",
      ],
      answer: "C",
    },
  ],
  rest: [
    {
      question: "What does the rest operator `...` do?",
      options: [
        "A. Spreads an array into individual elements",
        "B. Collects arguments into an array",
        "C. Adds rest parameters to a function",
        "D. All of the above",
      ],
      answer: "B",
    },
  ],
  spread: [
    {
      question: "What does the spread operator `...` do?",
      options: [
        "A. Combines elements into a single array",
        "B. Spreads an array or object into individual elements",
        "C. Defines default parameters",
        "D. None of the above",
      ],
      answer: "B",
    },
  ],
  arrowFunctions: [
    {
      question: "How do you define an arrow function?",
      options: [
        "A. () => {}",
        "B. function() {}",
        "C. => {}",
        "D. None of the above",
      ],
      answer: "A",
    },
  ],
  functions: [
    {
      question: "What is the correct syntax for defining a function?",
      options: [
        "A. function myFunction() {}",
        "B. myFunction() {}",
        "C. function = myFunction()",
        "D. () => function myFunction()",
      ],
      answer: "A",
    },
  ],
  forLoop: [
    {
      question:
        "Which of the following is the correct syntax for a `for` loop?",
      options: [
        "A. for (let i = 0; i < 10; i++) {}",
        "B. for (let i = 0; i++)",
        "C. for i in range(10):",
        "D. for loop(i=0; i<10)",
      ],
      answer: "A",
    },
  ],
  whileLoop: [
    {
      question: "What is the stopping condition in a `while` loop?",
      options: [
        "A. while the condition is true",
        "B. while the condition is false",
        "C. while the variable is undefined",
        "D. while the array is empty",
      ],
      answer: "A",
    },
  ],
  arrays: [
    {
      question: "Which of the following creates an array?",
      options: [
        "A. let arr = []",
        "B. let arr = new Array()",
        "C. Both A and B",
        "D. None of the above",
      ],
      answer: "C",
    },
  ],
  stringMethods: [
    {
      question: "What does `str.trim()` do?",
      options: [
        "A. Removes all whitespace",
        "B. Removes whitespace from the start and end of the string",
        "C. Converts the string to uppercase",
        "D. Splits the string into an array",
      ],
      answer: "B",
    },
  ],
};


function runQuiz() {
  console.log(chalk.green.bold("Welcome to the JavaScript Quiz of Doom!"));
  console.log(chalk.yellow("Type A, B, C, or D to answer the questions. Good luck!\n"));

  let score = 0;

  for (const topic in questions) {
    console.log(chalk.blueBright(`--- Topic: ${topic.toUpperCase()} ---`));
    questions[topic].forEach((q, index) => {
      console.log(`\n${chalk.bold(`Q${index + 1}:`)} ${q.question}`);
      q.options.forEach((opt) => console.log(chalk.cyan(opt)));

      let answer;
      do {
        answer = readline.question("Your answer: ").toUpperCase();
      } while (!["A", "B", "C", "D"].includes(answer));

      if (answer === q.answer) {
        console.log(chalk.green("Correct!"));
        score++;
      } else {
        console.log(chalk.red(`Wrong! The correct answer was ${q.answer}.`));
      }
    });
  }

  console.log(chalk.magentaBright(`\nYou completed the quiz! Your final score: ${score}`));
}


runQuiz();
