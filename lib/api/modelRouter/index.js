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
const baseRouter_1 = __importDefault(require("../baseRouter"));
const response_1 = __importDefault(require("../response"));
/**
 * Base Model Router with standard methods.
 *
 * @class ModelRouter
 */
class ModelRouter extends baseRouter_1.default {
    constructor() {
        super();
        /**
         * Return all instances of given Model, including query params
         * to define pagination.
         *
         * @param req
         * @param res
         */
        this.getAll = (req, res) => {
            return this.repository.getAll(req.query).then((instances) => {
                let mappedInstances = instances.map((instance) => {
                    return instance['serialize'] ? instance['serialize']() : instance.toJSON();
                });
                return response_1.default.data(res, mappedInstances);
            });
        };
        /**
         * Return single instance of Model by it's primary key.
         *
         * @param req
         * @param res
         */
        this.getById = (req, res) => {
            return this.repository.getById(req.params['id']).then((instance) => {
                if (!instance)
                    return response_1.default.notFound(res, req.params, 'Resource does not exist');
                return response_1.default.data(res, instance['serialize'] ? instance['serialize']() : instance.toJSON());
            });
        };
        /**
         * Create new Model instance.
         *
         * @param req
         * @param res
         */
        this.create = (req, res) => {
            return this.repository.create(req.body).then((instance) => {
                return response_1.default.data(res, instance['serialize'] ? instance['serialize']() : instance.toJSON(), 'Resource was created');
            }).catch((e) => {
                return res.status(e.getStatus()).send(e.getErrorData());
            });
        };
        /**
         * Update single existing Model instance.
         *
         * @param req
         * @param res
         */
        this.update = (req, res) => {
            return this.repository.getById(req.params['id']).then((instance) => {
                if (!instance)
                    return response_1.default.notFound(res, req.params, 'Resource does not exist');
                this.repository.update(instance, req.body).then((updatedInstance) => {
                    return response_1.default.data(res, updatedInstance['serialize'] ? updatedInstance['serialize']() : updatedInstance.toJSON(), 'Resource has been updated');
                }).catch((e) => {
                    return res.status(e.getStatus()).send(e.getErrorData());
                });
            });
        };
        /**
         * Delete single Model instance.
         *
         * @param req
         * @param res
         */
        this.delete = (req, res) => {
            return this.repository.getById(req.params['id']).then((instance) => {
                if (!instance)
                    return response_1.default.notFound(res, req.params, 'Resource does not exist');
                this.repository.delete(instance).then(() => {
                    return response_1.default.data(res, null, 'Resource was deleted');
                }).catch(e => {
                    return response_1.default.error(res, e);
                });
            });
        };
        /**
         * Restore single Model instance.
         *
         * @param req
         * @param res
         */
        this.restore = (req, res) => {
            return this.repository.getById(req.params['id']).then((instance) => {
                if (!instance)
                    return response_1.default.notFound(res, req.params, 'Resource does not exist');
                this.repository.restore(instance).then(() => {
                    return response_1.default.data(res, null, 'Resource has been restored');
                }).catch(e => {
                    return response_1.default.error(res, e);
                });
            });
        };
    }
}
exports.default = ModelRouter;
