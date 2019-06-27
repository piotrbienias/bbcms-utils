/*
 * Author: Piotr Bienias
 * Project: bbcms
 * Copyright (c) 2019.
 */
'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const baseError_1 = __importDefault(require("../baseError"));
const sequelize_1 = require("sequelize");
/**
 * Representation of Sequelize based error.
 */
class SequelizeError extends baseError_1.default {
    constructor(error) {
        super(error.message, null, SequelizeError.STATUS_SEQUELIZE_VALIDATION_ERROR_STATUS);
        this.errors = [];
        this.computeErrors(error);
    }
    /**
     * If current error is instance of SequelizeValidationError, we need
     * to compute all validation errors.
     *
     * @param error
     */
    computeErrors(error) {
        if (error instanceof sequelize_1.ValidationError) {
            error.errors.forEach((validationError) => {
                const { message, path, type } = validationError;
                this.errors.push({
                    message,
                    path,
                    type
                });
            });
        }
    }
    /**
     * We add `errors` property to the error data.
     */
    getErrorData() {
        let error = super.getErrorData();
        error['errors'] = this.errors;
        return error;
    }
}
SequelizeError.STATUS_SEQUELIZE_VALIDATION_ERROR_STATUS = 422;
exports.default = SequelizeError;
