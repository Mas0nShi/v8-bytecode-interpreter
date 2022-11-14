import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// StaGlobal <name_index>, <slot>
// StaGlobal: stores the value in the accumulator into a global variable.
export default function (context: IContext, stm: IStatement): void {
    const [name_index, _] = stm.operands;
    const obj = context.global;
    const name = context.constants[name_index];
    obj[name] = context.accumulator.value;

    context.pc += stm.bytes.byteLength;
}
