export declare type ErrorData = {
    message: string;
    data: any;
    status: number;
    [key: string]: any;
};
interface BaseErrorInterface {
    getMessage(): string;
    getData(): any;
    getStatus(): number;
    setMessage(message: string): void;
    setData(data: any): void;
    setStatus(status: number): void;
    getErrorData(): ErrorData;
}
/**
 * BaseError class holding message, error data and status.
 */
declare class BaseError implements BaseErrorInterface {
    private message;
    private data;
    private status;
    constructor(message?: string, data?: object, status?: number);
    /**
     * Return error representation.
     */
    getErrorData(): ErrorData;
    getData(): any;
    getMessage(): string;
    getStatus(): number;
    setData(data: any): void;
    setMessage(message: string): void;
    setStatus(status: number): void;
}
export default BaseError;
