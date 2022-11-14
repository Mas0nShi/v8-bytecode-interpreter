import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// LdaUndefined: loads undefined into accumulator.
export default function (context: IContext, stm: IStatement): void {
    context.accumulator.value = undefined;

    // TODO: set pc to the next statement.
    context.pc += stm.bytes.byteLength;
}
