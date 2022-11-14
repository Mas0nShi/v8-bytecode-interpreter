import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// LdaZero: loads zero into accumulator.
export default function (context: IContext, stm: IStatement): void {
    context.accumulator.value = 0;

    // TODO: set pc to the next statement.
    context.pc += stm.bytes.byteLength;
}
