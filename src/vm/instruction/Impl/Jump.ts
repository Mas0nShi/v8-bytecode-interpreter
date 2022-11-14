import IContext from "../../IContext";
import IStatement from "../../../parser/IStatement";

// Jump: Jump to pc+offset.
export default function (context: IContext, stm: IStatement): void {
    const [ nImm ] = stm.operands;
    context.pc += nImm;
}