import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// LdaZero: loads zero into accumulator.
export default function (context: IContext, stm: IStatement): void {
    context.accumulator.value = 0;

    context.pc += stm.bytes.byteLength;
}
