import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// LdaNull: loads null into accumulator.
export default function (context: IContext, stm: IStatement): void {
    context.accumulator.value = null;

    context.pc += stm.bytes.byteLength;
}
