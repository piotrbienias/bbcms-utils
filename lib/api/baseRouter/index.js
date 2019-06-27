/*
 * Author: Piotr Bienias
 * Project: bbcms
 * Copyright (c) 2019.
 */
'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRouter {
    /**
     * Create express Router instance
     */
    constructor() {
        this.router = express_1.Router();
    }
    /**
     * Return express Router instance.
     */
    getRouter() {
        return this.router;
    }
}
exports.default = BaseRouter;
