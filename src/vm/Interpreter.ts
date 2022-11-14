import Insns from './instruction';
import IContext from './IContext';   
import IStatement from '../parser/IStatement';

export default class Interpreter {
    private context: IContext;
    private statements: {[offset: number]: IStatement};
    constructor(statements: string[], constants: any[]) {
        this.context = new IContext(constants);
        this.statements = {};
        statements.map((line: string) => IStatement.parse(line)).forEach((stm: IStatement) => {
            this.statements[stm.offset] = stm;
        });
    }

    public execute(): any {
        console.log("Before execution");
        console.log(this.context);
        console.log("Start execution");
        
        // TODO: Implement.
        let result;

        while (1) {
            const stm = this.statements[this.context.pc];
            // console.log(stm);
            
            if (!stm) break;
            const insn = Insns[stm.opcode.name];
            if (!insn) throw new Error(`Unimplemented instruction: ${stm.opcode.name}`);

            try {
                result = insn(this.context, stm);
            } catch (e) {
                // TODO: Handle error.
                console.error(e);
                break;
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
