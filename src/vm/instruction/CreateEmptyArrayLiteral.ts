import IStatement from '../../parser/IStatement';
import IContext from '../IContext';

// CreateEmptyArrayLiteral: creates an empty array literal and stores it in accumulator.
export default function (context: IContext, stm: IStatement): void {
    const [ _ ] = stm.operands; 
    context.accumulator.value = [];
}
