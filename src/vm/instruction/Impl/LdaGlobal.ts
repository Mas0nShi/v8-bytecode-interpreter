import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// LdaGlobal: loads a global variable into accumulator.
export default function (context: IContext, stm: IStatement): void {
    const [cIdx, _] = stm.operands;
    const obj = context.global;
    const property = context.constants[cIdx];
    context.accumulator.value = (<any>obj)[property];

    // TODO: set pc to the next statement.
    context.pc += stm.bytes.byteLength;
}
