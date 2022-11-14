import IContext from "../../IContext";
import IStatement from "../../../parser/IStatement";

// JumpIfFalse: jump to the given label if the value in the accumulator is false.
export default function (context: IContext, stm: IStatement): void {
    const [ nImm ] = stm.operands;
    
    if (!context.accumulator.value) {
        context.pc += nImm;
        return;
    }
    // TODO: set pc to the next statement.
    context.pc += stm.bytes.byteLength;
}