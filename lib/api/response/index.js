/*
 * Author: Piotr Bienias
 * Project: bbcms
 * Copyright (c) 2019.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponse {
    /**
     * Return response with status 200 and some response data and message.
     *
     * @param response
     * @param data
     * @param message
     */
    static data(response, data, message) {
        return response.status(ApiResponse.STATUS_OK).send({
            data,
            message,
            status: ApiResponse.STATUS_OK
        });
    }
    /**
     * Return response with status 401 - unauthorized.
     *
     * @param response
     * @param message
     */
    static unauthorized(response, message) {
        message = message ? message : 'Unauthorized';
        return response.status(ApiResponse.STATUS_UNAUTHORIZED).send({
            data: null,
            message,
            status: ApiResponse.STATUS_UNAUTHORIZED
        });
    }
    /**
     * Return response with status 404 - resource not found.
     *
     * @param response
     * @param data
     * @param message
     */
    static notFound(response, data, message) {
        message = message ? message : 'Entity does not exist';
        return response.status(ApiResponse.STATUS_NOT_FOUND).send({
            data,
            message,
            status: ApiResponse.STATUS_NOT_FOUND
        });
    }
    /**
     * Return response with given error status, or 400 if not specified.
     *
     * @param response
     * @param error
     * @param message
     * @param status
     */
    static error(response, error, message, status) {
        message = message ? message : 'Error while performing the operation';
        status = status || ApiResponse.STATUS_BAD_REQUEST;
        return response.status(status).send({
            error: error ? error.message : null,
            message,
            status
        });
    }
}
ApiResponse.STATUS_OK = 200;
ApiResponse.STATUS_BAD_REQUEST = 400;
ApiResponse.STATUS_UNAUTHORIZED = 401;
ApiResponse.STATUS_NOT_FOUND = 404;
ApiResponse.STATUS_UNPROCESSABLE_ENTITY = 422;
exports.default = ApiResponse;
