import fs from 'fs';
import axios from 'axios';
import webSocket from 'ws';

// ---You can comment the tasks and imports one by one---

//example array
const exampleArray = Array.from({ length: 100 }, (_, index) => (index + 1).toString());

//Basic task:
const firstFunction = (): string[] => {
  return exampleArray.map((element: string) => {
    if (Number(element) % 3 === 0 && Number(element) % 5 === 0) {
      element = 'FizzBuzz';
    } else if (Number(element) % 3 === 0) {
      element = 'Fizz';
    } else if (Number(element) % 5 === 0) {
      element = 'Buzz';
    } else {
      element = 'i';
    }
    return element;
  });
};

const secondFunction = (number: number): string[] => {
  const answerArray = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      answerArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
      answerArray.push('Fizz');
    } else if (i % 5 === 0) {
      answerArray.push('Buzz');
    } else {
      answerArray.push(i.toString());
    }
  }

  console.log(answerArray);
  return answerArray;
};

console.log(firstFunction());

secondFunction(3);
secondFunction(5);
secondFunction(15);
secondFunction(4);

//Extension Examples
// 1.

const getResult = (number: number): string[] => {
  const answerArray = [];

  for (let i = 1; i <= number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      answerArray.push('FizzBuzz');
    } else {
      answerArray.push(i.toString());
    }
  }

  console.log(answerArray);

  return answerArray;
};

getResult(1);
getResult(3);
getResult(5);
getResult(15);

//2.
const fetchResults = async (n: number): Promise<string[]> => {
  const answer: string[] = [];

  for (let i = 1; i <= n; i++) {
    try {
      const response = await axios.get<{ solution: string }>('/fizz-buzz-server/run', {
        params: { num: i },
      });

      answer.push(response.data.solution);
    } catch (error: any) {
      console.error(`Error fetching data for num ${i}: ${error.message}`);
      answer.push(i.toString());
    }
  }

  console.log(answer);

  return answer;
};

fetchResults(1);
fetchResults(10);

//3.
const fetchRule = async (num: number): Promise<string> => {
  const response = await axios.get<string>(`/rule?num=${num}`);
  return response.data;
};

const fetchRes = async (rule: string, num: number): Promise<string> => {
  const response = await axios.get<string>(`/res?rule=${rule}&num=${num}`);
  return response.data;
};

const fetchRuleRes = async (n: number): Promise<string[]> => {
  const answer: string[] = [];

  for (let i = 1; i <= n; i++) {
    try {
      const rule = await fetchRule(i);
      const res = await fetchRes(rule, i);

      answer.push(res);
    } catch (error: any) {
      console.error(`Error fetching data for num ${i}: ${error.message}`);
      answer.push(i.toString());
    }
  }

  console.log(answer);

  return answer;
};

fetchRuleRes(2);
fetchRuleRes(5);

//4.

const getFibonacci = (n: number): string[] => {
  const relust = [];

  let fib1 = 1;
  let fib2 = 1;

  for (let i = 1; i <= n; i++) {
    let currentFib;

    if (i <= 2) {
      currentFib = 1;
    } else {
      currentFib = fib1 + fib2;
      fib1 = fib2;
      fib2 = currentFib;
    }

    if (currentFib % 3 === 0 && currentFib % 5 === 0) {
      relust.push('FizzBuzz');
    } else if (currentFib % 3 === 0) {
      relust.push('Fizz');
    } else if (currentFib % 5 === 0) {
      relust.push('Buzz');
    } else {
      relust.push(currentFib.toString());
    }
  }

  return relust;
};

getFibonacci(9);
getFibonacci(20);
getFibonacci(30);

//5.
//We can do this with Node.js library 'fs'
const getStrings = (n: number) => {
  const result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push('FizzBuzz');
    } else if (i % 3 === 0) {
      result.push('Fizz');
    } else if (i % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(i.toString());
    }
  }

  return result;
};

const writeStringsToFile = (filePath: string, n: number) => {
  const answers = getStrings(n);
  const lines = answers.join('\n');

  fs.writeFile(filePath, lines, err => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log(`Answers have been written to ${filePath}`);
    }
  });
};

writeStringsToFile('strings.txt', 20);

//6.

const getStringss = (number: number) => {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    return 'Fizz';
  } else if (number % 5 === 0) {
    return 'Buzz';
  } else {
    return number.toString();
  }
};

const wss = new webSocket.Server({ port: 9090 });

wss.on('connection', (ws: any) => {
  console.log('Client connected');

  ws.on('message', (message: string) => {
    const receivedNumber = parseInt(message, 10);

    if (!isNaN(receivedNumber)) {
      const answer = getStringss(receivedNumber);
      ws.send(answer);
      console.log(`Received number: ${receivedNumber}, Answer: ${answer}`);
    } else {
      console.error(`Invalid number received: ${message}`);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});
