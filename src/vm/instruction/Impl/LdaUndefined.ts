import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// LdaUndefined: loads undefined into accumulator.
export default function (context: IContext, stm: IStatement): void {
    context.accumulator.value = undefined;

    context.pc += stm.bytes.byteLength;
}
