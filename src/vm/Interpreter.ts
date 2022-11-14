import Insns from './instruction';
import IContext from './IContext';   
import IStatement from '../parser/IStatement';

export default class Interpreter {
    private context: IContext;
    private statements: IStatement[];
    constructor(statements: string[], constants: any[]) {
        this.context = new IContext(constants);
        this.statements = statements.map((line: string) => IStatement.parse(line));
    }

    public execute(): any {
        console.log("Before execution");
        console.log(this.context);
        console.log("Start execution");
        
        // TODO: Implement.
        let result;
        while (this.context.pc < this.statements.length) {
            const stm = this.statements[this.context.pc];
            const insn = Insns[stm.opcode.name];
            this.context.pc++;
            if (insn) {
                try {
                    result = insn(this.context, stm);
                } catch (e: any) {
                    // TODO: Handle error.
                    console.log(e.message, stm);
                    // console.log(this.context.registers);
                    break;
                }
            } else {
                throw new Error(`Unimplemented instruction: ${stm.opcode.name}`);
            }

        }
        console.log('Running end of program');
        console.log(result);
        
        console.log(this.context);
    }

    public static Run(statements: string[]): void {
        // TODO: Implement.
    }



}
