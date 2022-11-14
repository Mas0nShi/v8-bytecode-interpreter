import IStatement from '../../parser/IStatement';
import IContext from '../IContext';

// LdaConstant: loads a constant value into accumulator.
export default function (context: IContext, stm: IStatement): void {
    const [ cIdx ] = stm.operands;
    context.accumulator.value = context.constants[cIdx];
}
