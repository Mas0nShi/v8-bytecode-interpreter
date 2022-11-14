import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// ToBooleanLogicalNot: converts accumulator to boolean and negates it.
export default function (context: IContext, stm: IStatement): void {
    const [] = stm.operands;
    context.accumulator.value = !context.accumulator.value;

    context.pc += stm.bytes.byteLength;
}
