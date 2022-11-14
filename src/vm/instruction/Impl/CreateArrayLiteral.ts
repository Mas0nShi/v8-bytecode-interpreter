import IStatement from '../../../parser/IStatement';
import IContext from '../../IContext';

// CreateArrayLiteral: creates an array literal to store in accumulator.
// CreateArrayLiteral <element_idx> <literal_idx> <flag>
export default function (context: IContext, stm: IStatement): void {
    const [ element_idx, literal_idx, _ ] = stm.operands; 
    context.accumulator.value = [...context.constants[element_idx]];
    
    context.pc += stm.bytes.byteLength;
}
