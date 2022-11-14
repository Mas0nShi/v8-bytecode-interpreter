import OperandType from "./OperandType";

export default {
    LdaSmi: {OperandCount: 1, OperandType: OperandType.Imm},
    LdaUndefined: {OperandCount: 0, OperandType: OperandType.None},
    Return: {OperandCount: 0, OperandType: OperandType.None},
    Star: {OperandCount: 1, OperandType: OperandType.Reg},
}