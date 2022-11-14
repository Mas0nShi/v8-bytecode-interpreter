import IAccumulator from './IAccumulator';
import IRegister from './IRegister';
import IStack from './IStack';

export default class IContext {
    public global: {[key: string]: any};
    public constants: any[] = []; // Constants.
    public accumulator: IAccumulator;
    public registers: IRegister[];
    public stack: IStack;
    public pc: number;
    constructor(constants: any[]) {
        this.global = global; // TODO: copy from global, Global object.
        this.constants = constants;
        this.accumulator = new IAccumulator(); // Accumulator.
        this.registers = [...Array(16).keys()].map((i: number) => new IRegister(`r${i}`, 0x0)); // Registers r0-r15.
        this.stack = new IStack();
        this.pc = 0x0; // Program counter.
    }


}