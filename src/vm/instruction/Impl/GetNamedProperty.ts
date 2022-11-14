import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// GetNamedProperty: gets a named property from an object.
export default function (context: IContext, stm: IStatement): void {
    const [rIdx, cIdx] = stm.operands;
    const obj = context.registers[rIdx].value;
    const property = context.constants[cIdx];
    context.accumulator.value = <any>obj[property];

    context.pc += stm.bytes.byteLength;
}
