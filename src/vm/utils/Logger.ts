import process from 'process';
import IContext from '../IContext';

export default class Logger {
    public static debug(target: string, ...args: any[]): void {
        if (process.env.DEBUG) {
            console.debug("[DEBUG]", target, ...args);
        }
    }

    public static logContext(context: IContext): void {
        // TODO: pass global object.
        const aContext: IContext = {...context, global: {}};
        Logger.debug("context", aContext);
    }
}