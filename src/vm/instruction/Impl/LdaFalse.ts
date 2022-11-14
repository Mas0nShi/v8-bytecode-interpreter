import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// LdaFalse: loads false into accumulator.
export default function (context: IContext, stm: IStatement): void {
    context.accumulator.value = false;

    // TODO: set pc to the next statement.
    context.pc += stm.bytes.byteLength;
}
