const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Digite qualquer string: ', (string) => {
  var input = String(string);
  var newString = "";

  for(let k = input.length -1; k >= 0; k--) {
    newString = newString + input[k]
  }
  console.log(string + " invertido(a) é: " + newString)
  rl.close();

});