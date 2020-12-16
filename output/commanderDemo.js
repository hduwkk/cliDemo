const chalk = require('chalk')
const { Command } = require('commander');
const program = new Command();
program.version('0.0.1', '-v, --version')

program
 .option('-d, --debug', 'output extra debugging')
 .option('-s', 'small pizza size')
 .option('-p, --pizza-type <type>', 'flavour of pizza')

program.parse(process.argv)
console.log(program.s, 'small')
console.log(program.pizzaType, '--pizza-type <type>')