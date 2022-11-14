import fs from 'fs';
import IRegister from './src/vm/IRegister';
import IStatement from './src/parser/IStatement';
import Interpreter from './src/vm/Interpreter';

let content = fs.readFileSync("test/example5.txt", "utf8").toString();


// console.log(content.split('\r\n'));
// content.split('\r\n').forEach((element: string) => {
//     console.log(JSON.stringify(IStatement.parse(element)));
// });

const interpreter = new Interpreter(content.split('\r\n'), ['console', 'log']);
interpreter.execute();