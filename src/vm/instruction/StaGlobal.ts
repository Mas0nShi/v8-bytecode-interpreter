import IStatement from '../../parser/IStatement';
import IContext from '../IContext';

// StaGlobal: stores the value in the accumulator into a global variable.
export default function (context: IContext, stm: IStatement): void {
    const [ cIdx, _ ] = stm.operands;
    const obj = context.global;
    const property = context.constants[cIdx];
    (<any>obj)[property] = context.accumulator.value;
}
