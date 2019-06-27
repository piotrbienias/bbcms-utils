/*
 * Author: Piotr Bienias
 * Project: bbcms
 * Copyright (c) 2019.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * BaseError class holding message, error data and status.
 */
class BaseError {
    constructor(message, data, status) {
        this.message = message;
        this.data = data;
        this.status = status || 400;
    }
    /**
     * Return error representation.
     */
    getErrorData() {
        return {
            message: this.message,
            data: this.data,
            status: this.status
        };
    }
    getData() {
        return this.data;
    }
    getMessage() {
        return this.message;
    }
    getStatus() {
        return this.status;
    }
    setData(data) {
        this.data = data;
    }
    setMessage(message) {
        this.message = message;
    }
    setStatus(status) {
        this.status = status;
    }
}
exports.default = BaseError;
