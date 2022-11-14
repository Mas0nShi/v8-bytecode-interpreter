import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// SetKeyedProperty: set the value in the accumulator to the property of the object in the accumulator.
// SetKeyedProperty <object> <key> <slot>.
export default function (context: IContext, stm: IStatement): void {
    const [rIdx, rIdx2,] = stm.operands;
    const key = <number>context.registers[rIdx2].value;
    // obj[key] = acc
    context.registers[rIdx].value[key] = context.accumulator.value;

    context.pc += stm.bytes.byteLength;
}