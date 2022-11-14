import IStatement from '../../parser/IStatement';
import IContext from '../IContext';

// LdaTrue: loads true into accumulator.
export default function (context: IContext, stm: IStatement): void {
    context.accumulator.value = true;
}
