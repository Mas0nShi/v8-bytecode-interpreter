import IRegister from './IRegister';

export default class Accumulator extends IRegister {
    constructor() {
        super('acc', 0x0);
    }
}