// format: Address(hex) | Offset | Bytes | Opcode | Operand | More Info
const RegexInsn = /.*?(0x[\S]+)\s@\s*(\S+)\s:\s+([0-9a-f\s]+)\s+?(\S+)(.*)/g
const RegexImm = /\s*?\[(\d+)\](.*)/g; // e.g. [1]
const RegexReg = /\s*?r(\d+)/g; // e.g. r1
const RegexArg = /[^\s]*?(\d+)$/g; // e.g. a1
const RegexShortStar = /Star(\d+)/g; // e.g. Star1
const RegexOperand = /[,]/; // e.g. r1, r2, [12]

export default class IStatement {
    address: number;
    offset: number;
    bytes: ArrayBuffer;
    opcode: {name: string, idx: number | null};
    operands: number[];
    others: string; // TODO: Implement! e.g.: Jump Info.
    
    constructor(address: number, offset: number, bytes: string, opcode: string, operand: string) {
        this.address = address;
        this.offset = offset;
        
        const buffer = this.parseBytesAndSize(bytes);
        this.bytes = buffer;

        this.opcode = this.parseOpcode(opcode);

        const {operands, others} = this.parseOperandAndOthers(operand);
        this.operands = operands;
        this.others = others;
    }

    private parseBytesAndSize(bytes: string): ArrayBuffer {
        const hexStrs = bytes.trimStart().trimEnd()
        const bytehexs = hexStrs.split(' ');
        const buffer = new ArrayBuffer(bytehexs.length);
        const view = new DataView(buffer);
        bytehexs.forEach((v: string, index: number) => view.setUint8(index, parseInt(v, 16)));
        return buffer;
    }

    private parseOpcode(opcode: string): {name: string, idx: number | null} {
        // TODO: ShortStar r0-r15.
        if (RegexShortStar.test(opcode)) {
            return {name: 'Star', idx: IStatement.parseShortStar(opcode)};
        }
        return {name: opcode, idx: null};
    }

    private parseOperandAndOthers(operand: string): {operands: number[], others: string} {
        let others = '';
        let result: number[] = [];
        
        operand.split(RegexOperand).forEach((element: string) => {
            // empty string.
            if (element === '') {
                return;
            }
            // imm e.g.: [16]
            if ((new RegExp(RegexImm)).test(element)) {
                result.push(IStatement.parseImm(element));
                return;
            }
            // reg e.g.: r1
            if ((new RegExp(RegexReg)).test(element)) {
                result.push(IStatement.parseReg(element));
                return;
            }
            // arg e.g.: a1
            if ((new RegExp(RegexArg)).test(element)) {
                result.push(IStatement.parseArg(element));
                return;
            }
            
            // Jump Info e.g.:  (0x1d960019a16c @ 14)
            if (others === '') {
                others = element.trimStart();
                return;
            }
            // Other Unknown data.
            throw new Error(`Not implement '${element}'`);

        });

        return {operands: result, others: others};
    }

    private static parseImm(params: string): number {
        let regexp = new RegExp(RegexImm);
        let result = regexp.exec(params);
        if (result) {
            return parseInt(result[1], 10);
        }
        throw new Error(`Invalid Immediate '${params}'`);
    }

    private static parseReg(params: string): number {
        let regexp = new RegExp(RegexReg);
        let result = regexp.exec(params);
        if (result) {
            return parseInt(result[1], 10);
        }
        throw new Error(`Invalid register '${params}'`);
    }

    private static parseArg(params: string): number {
        let regexp = new RegExp(RegexArg);
        let result = regexp.exec(params);
        if (result) {
            return parseInt(result[1], 10);
        }
        throw new Error(`Invalid Argument '${params}'`);
    }

    private static parseShortStar(opcode: string): number {
        let regexp = new RegExp(RegexShortStar);
        let result = regexp.exec(opcode);
        if (result) {
            return parseInt(result[1], 10);
        }
        throw new Error(`Invalid opcode '${opcode}'`);
    }

    public static parse(line: string): IStatement {
        let regexp = new RegExp(RegexInsn);
        let result = regexp.exec(line);
        if (result) {
            return new IStatement(
                parseInt(result[1], 16), // Address (hex)
                parseInt(result[2], 10), // Offset (dec)
                result[3],               // Bytes (hex string)
                result[4],               // Opcode (string)
                result[5],               // Operand (string)
            );
        }
        throw new Error(`Invalid line '${line}'`);
    }
}