import IContext from "../../IContext";
import IStatement from "../../../parser/IStatement";

// Add <src>.
// Add register <src> to accumulator.
export default function (context: IContext, stm: IStatement): void {
    const [rIdx,] = stm.operands;
    context.accumulator.value += context.registers[rIdx].value;

    context.pc += stm.bytes.byteLength;
}