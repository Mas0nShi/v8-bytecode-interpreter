import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// GetKeyedProperty <object>, <slot>.
// GetKeyedProperty: gets a keyed property from an object.
export default function (context: IContext, stm: IStatement): void {
    const [rIdx, _] = stm.operands;
    const obj = context.registers[rIdx].value;
    context.accumulator.value = <any>obj[context.accumulator.value];
        
    context.pc += stm.bytes.byteLength;
}
