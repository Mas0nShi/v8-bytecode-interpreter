import IStatement from '../../parser/IStatement';
import IContext from '../IContext';

// TestEqualStrict: test if the value in the accumulator is strictly equal to the value in the register.
export default function (context: IContext, stm: IStatement): void {
    const [ rIdx, _ ] = stm.operands;
    context.accumulator.value = context.registers[rIdx].value === context.accumulator.value;
}