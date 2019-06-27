import BaseError, { ErrorData } from '../baseError';
import { BaseError as SequelizeBaseError } from 'sequelize';
/**
 * Representation of Sequelize based error.
 */
declare class SequelizeError extends BaseError {
    private readonly errors;
    static STATUS_SEQUELIZE_VALIDATION_ERROR_STATUS: number;
    constructor(error: SequelizeBaseError);
    /**
     * If current error is instance of SequelizeValidationError, we need
     * to compute all validation errors.
     *
     * @param error
     */
    computeErrors(error: SequelizeBaseError): void;
    /**
     * We add `errors` property to the error data.
     */
    getErrorData(): ErrorData;
}
export default SequelizeError;
