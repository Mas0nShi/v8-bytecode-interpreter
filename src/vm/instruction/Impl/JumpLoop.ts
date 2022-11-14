import IContext from "../../IContext";
import IStatement from "../../../parser/IStatement";

// JumpLoop: jumpLoop <imm> <depth>.
export default function (context: IContext, stm: IStatement): void {
    const [ cImm, depth, _ ] = stm.operands;
    context.pc -= cImm;
}