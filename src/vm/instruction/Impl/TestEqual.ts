import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// TestEqual: tests if the value of the accumulator is equal to the value of the register.
export default function (context: IContext, stm: IStatement): void {
    const [rIdx, _] = stm.operands;
    context.accumulator.value = context.registers[rIdx].value == context.accumulator.value;

    // TODO: set pc to the next statement.
    context.pc += stm.bytes.byteLength;
}