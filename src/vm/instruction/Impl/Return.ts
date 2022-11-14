import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// Return: return the value in the accumulator.
export default function (context: IContext, stm: IStatement): any {
    context.pc += stm.bytes.byteLength;
    
    return context.accumulator.value;
}