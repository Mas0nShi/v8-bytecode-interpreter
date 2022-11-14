import fs from 'fs';
import IRegister from './src/vm/IRegister';
import IStatement from './src/parser/IStatement';
import Interpreter from './src/vm/Interpreter';

let content = fs.readFileSync("test/example1.txt", "utf8").toString();


// console.log(content.split('\r\n'));
// content.split('\r\n').forEach((element: string) => {
//     console.log(JSON.stringify(IStatement.parse(element)));
// });

const interpreter = new Interpreter(content.split('\n'), ['console', 'log', 'hello world']);
interpreter.execute();

