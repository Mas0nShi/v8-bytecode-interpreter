import IStatement from '../../parser/IStatement';
import IContext from '../IContext';

// CallProperty1: calls a property with 1 argument.
export default function (context: IContext, stm: IStatement): void {
    const [ rIdx, rIdx2, rIdx3, _ ] = stm.operands;
    const func = <Function>context.registers[rIdx].value;
    const scope = context.registers[rIdx2].value;
    const arg = context.registers[rIdx3].value;
    context.accumulator.value = <any>func.call(scope, arg);
}
