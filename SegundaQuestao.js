const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Digite um número: ', (numero) => {
  numero = parseInt(numero);

  if (!isNaN(numero)) {
      fibonacciSequence(numero);
  } else {
      console.log("Entrada inválida. Por favor, insira um número válido.");
  }
  rl.close();
});


function fibonacciSequence(limit) {
  let sequence = [0, 1];
  let i = 2;
  while (true) {
      let nextFib = sequence[i - 1] + sequence[i - 2];
      if (nextFib > limit) {
          break;
      }
      sequence.push(nextFib);
      i++;
  }

  const containsInFibonacci = sequence.includes(limit);

  if (containsInFibonacci) {

    console.log("Esse número contem na sequencia de Fibonacci")
  }else{
    console.log("Esse número não contem na sequencia de Fibonacci")
  }
}










