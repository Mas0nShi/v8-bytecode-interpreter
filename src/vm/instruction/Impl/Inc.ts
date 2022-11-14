import IContext from "../../IContext";
import IStatement from "../../../parser/IStatement";

// Inc: increments the value of accumulator.
export default function (context: IContext, stm: IStatement): void {
    context.accumulator.value++;

    context.pc += stm.bytes.byteLength;
}