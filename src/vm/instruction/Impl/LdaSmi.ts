import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// LdaSmi: loads a immediate value into accumulator.
export default function (context: IContext, stm: IStatement): void {
    const [nImm] = stm.operands;
    context.accumulator.value = nImm;

    // TODO: set pc to the next statement.
    context.pc += stm.bytes.byteLength;
}
