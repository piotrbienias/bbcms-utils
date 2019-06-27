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
const underscore_1 = require("underscore");
const sequelizeError_1 = __importDefault(require("../../errors/sequelizeError"));
/**
 * Base Model Repository with standard methods.
 * M - model class
 * MS - model static type representation
 *
 * @class ModelRepository
 */
class ModelRepository {
    constructor(model) {
        /**
         * Query Options
         */
        this.defaultQueryOptions = {
            page: 1,
            perPage: 10,
            order: 'ASC',
            orderBy: 'id'
        };
        this.model = model;
        this.defaultQueryOptions.orderBy = this.model.primaryKeyAttribute;
    }
    /**
     * Return all records of given Model with possibility of paginating results.
     *
     * @param options
     * @param scope
     */
    getAll(scope = [], options) {
        options = (typeof options !== 'undefined' && underscore_1.isObject(options)) ? options : {};
        underscore_1.defaults(options, this.defaultQueryOptions);
        this.validateQueryOptions(options);
        let queryOptions = {
            order: [[options.orderBy, options.order]],
            limit: options.perPage,
            offset: (options.page - 1) * options.perPage
        };
        return this.model.scope(scope).findAll(queryOptions);
    }
    /**
     * Return single Model record by PK.
     *
     * @param id
     */
    getById(id) {
        return this.model.findByPk(id);
    }
    /**
     * Create new Model record.
     *
     * @param data
     */
    async create(data) {
        try {
            return await this.model.create(data);
        }
        catch (e) {
            throw new sequelizeError_1.default(e);
        }
    }
    /**
     * Update single Model record.
     *
     * @param instance
     * @param data
     */
    async update(instance, data) {
        try {
            return await instance.update(data);
        }
        catch (e) {
            throw new sequelizeError_1.default(e);
        }
    }
    /**
     * Delete single Model record.
     *
     * @param instance
     */
    delete(instance) {
        return instance.destroy();
    }
    /**
     * Restore single Model record.
     *
     * @param instance
     */
    restore(instance) {
        return instance.restore();
    }
    /**
     * Validate query options against specific rules and apply default values
     * if necessary.
     *
     * @param options
     */
    validateQueryOptions(options) {
        if (!underscore_1.keys(this.model.rawAttributes).includes(options.orderBy))
            options.orderBy = this.defaultQueryOptions.orderBy;
        if (!['ASC', 'DESC'].includes(options.order))
            options.order = this.defaultQueryOptions.order;
        if (options.page <= 0)
            options.page = this.defaultQueryOptions.page;
        if (options.perPage <= 0)
            options.perPage = this.defaultQueryOptions.perPage;
    }
}
exports.default = ModelRepository;
