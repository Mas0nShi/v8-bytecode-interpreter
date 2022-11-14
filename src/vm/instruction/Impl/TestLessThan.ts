import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// TestLessThan: test if the value in the accumulator is less than the value in the register.
export default function (context: IContext, stm: IStatement): void {
    const [rIdx, _] = stm.operands;
    context.accumulator.value = context.registers[rIdx].value < context.accumulator.value;

    // TODO: set pc to the next statement.
    context.pc += stm.bytes.byteLength;
}