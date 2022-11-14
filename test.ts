import fs from 'fs';
import IRegister from './src/vm/IRegister';
import IStatement from './src/parser/IStatement';
import Interpreter from './src/vm/Interpreter';

let content = fs.readFileSync("test/dist/for2.txt", "utf8").toString();


// console.log(content.split('\r\n'));
// content.split('\r\n').forEach((element: string) => {
//     console.log(JSON.stringify(IStatement.parse(element)));
// });

const interpreter = new Interpreter(
    content.split('\n'), 
    [
        'N1CTF{y3Ea4h_tHIs_1S_NlDeskT0p_4pPS_n0w_enj0y_1T}',
        [
            [ 78,  49,  67,  84,  70, 123, 121],
            [ 51,  69,  97,  52, 104,  95, 116],
            [ 72,  73, 115,  95,  49,  83,  95],
            [ 78, 108,  68, 101, 115, 107,  84],
            [ 48, 112,  95,  52, 112,  80,  83],
            [ 95, 110,  48, 119,  95, 101, 110],
            [106,  48, 121,  95,  49,  84, 125]
        ],
        'length', 
        'console', 
        'log',
        'Length Error', 
        'charCodeAt',
        'Hacker!',
        'Success!'
    ]);
interpreter.execute();

