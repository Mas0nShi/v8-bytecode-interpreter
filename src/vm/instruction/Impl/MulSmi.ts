import IContext from "../../IContext";
import IStatement from "../../../parser/IStatement";

// MulSmi: accumulator = accumulator * operand.
// MulSmi <imm>.
export default function (context: IContext, stm: IStatement): void {
    const [cImm,] = stm.operands;
    context.accumulator.value *= cImm;

    context.pc += stm.bytes.byteLength;
}