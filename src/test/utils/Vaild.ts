import progress from 'process';
import path from 'path';

export default class Vaild {

    
    private static getCaller() {
        const stackInfo = <string>new Error().stack;
        const result = <RegExpExecArray>/\s+at\s(.*)\((.*)\)/g.exec(stackInfo.split('\n')[3])
        const relativePath = path.relative(progress.cwd(), result[2]);
        return relativePath;
    }


    public static CHECKEQ(a1: any, a2: any): void {
        if (a1 == a2) return;
        throw new Error(`${a1} != ${a2} at ${Vaild.getCaller()}`)
    }
}