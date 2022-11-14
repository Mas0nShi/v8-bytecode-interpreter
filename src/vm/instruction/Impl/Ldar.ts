import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// Ldar: loads the value of the variable into the accumulator.
export default function (context: IContext, stm: IStatement): void {
    const [rIdx] = stm.operands;
    context.accumulator.value = context.registers[rIdx].value;

    context.pc += stm.bytes.byteLength;
}
