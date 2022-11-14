import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// Star: loads value from accumulator into generic register.
export default function (context: IContext, stm: IStatement): void {
    const [reg,] = stm.operands;
    // ShortStar r0-r15.
    const idx = stm.opcode.idx ?? reg;
    context.registers[idx].value = context.accumulator.value;

    context.pc += stm.bytes.byteLength;
}
