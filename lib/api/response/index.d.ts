import { Response } from 'express';
declare class ApiResponse {
    static STATUS_OK: number;
    static STATUS_BAD_REQUEST: number;
    static STATUS_UNAUTHORIZED: number;
    static STATUS_NOT_FOUND: number;
    static STATUS_UNPROCESSABLE_ENTITY: number;
    /**
     * Return response with status 200 and some response data and message.
     *
     * @param response
     * @param data
     * @param message
     */
    static data(response: Response, data: object, message?: string | null): Response;
    /**
     * Return response with status 401 - unauthorized.
     *
     * @param response
     * @param message
     */
    static unauthorized(response: Response, message?: string | null): Response;
    /**
     * Return response with status 404 - resource not found.
     *
     * @param response
     * @param data
     * @param message
     */
    static notFound(response: Response, data?: object, message?: string | null): Response;
    /**
     * Return response with given error status, or 400 if not specified.
     *
     * @param response
     * @param error
     * @param message
     * @param status
     */
    static error(response: Response, error?: Error, message?: string | null, status?: number): Response;
}
export default ApiResponse;
