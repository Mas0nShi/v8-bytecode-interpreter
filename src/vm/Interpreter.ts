import Insns from './instruction';
import IContext from './IContext';   
import IStatement from '../parser/IStatement';
import Logger from './utils/Logger';

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
        // Logger.debug('=== Context ===');
        // Logger.logContext(this.context);
        // Logger.debug('=====================Execute Start=====================');
        
        // TODO: Implement.
        let result;

        const maxpc = Math.max(...Object.keys(this.statements).map((v: string) => parseInt(v, 10)));
        while (1) {
            // End of program.
            if (this.context.pc > maxpc) break;

            const stm = this.statements[this.context.pc];
            // console.log(stm);
            Logger.debug("Stmt", stm.opcode, stm.operands);

            if (!stm) throw new Error(`Invalid pc: ${this.context.pc}`);
            const insn = Insns[stm.opcode.name];
            if (!insn) throw new Error(`Unimplemented instruction: ${stm.opcode.name}`);

            try {
                result = insn(this.context, stm);
            } catch (e) {
                // TODO: Handle error.
                Logger.logContext(this.context);
                Logger.debug("ERR", e);
                break;
            }
        }

        // Logger.debug('=====================Execute End=======================');
        // Logger.debug('Result: ' + result);
        // Logger.debug('=== Context ===');
        // Logger.logContext(this.context);
    }

    public static Run(statements: string[]): void {
        // TODO: Implement.
    }



}
