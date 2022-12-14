import IContext from "../../IContext";
import IStatement from "../../../parser/IStatement";

// JumpIfFalse: jump to pc+offset if accmulator is false.
export default function (context: IContext, stm: IStatement): void {
    const [ nImm ] = stm.operands;
    
    if (!context.accumulator.value) {
        context.pc += nImm;
        return;
    }

    context.pc += stm.bytes.byteLength;
}