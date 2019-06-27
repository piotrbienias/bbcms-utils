import { Request, Response } from 'express';
import { Model } from 'sequelize';
import { ModelRepositoryInterface, ModelStatic } from "../modelRepository";
import BaseRouter from "../baseRouter";
/**
 * Base Sequelize Model Router Interface
 */
interface ModelRouterInterface {
    repository: ModelRepositoryInterface<Model, ModelStatic>;
    getAll(req: Request, res: Response): Promise<Response>;
    getById(req: Request, res: Response): Promise<Response>;
    create(req: Request, res: Response): Promise<Response>;
    update(req: Request, res: Response): Promise<Response>;
    delete(req: Request, res: Response): Promise<Response>;
    restore(req: Request, res: Response): Promise<Response>;
}
/**
 * Base Model Router with standard methods.
 *
 * @class ModelRouter
 */
declare class ModelRouter extends BaseRouter implements ModelRouterInterface {
    /**
     * Current Router's Repository
     */
    repository: ModelRepositoryInterface<Model, ModelStatic>;
    constructor();
    /**
     * Return all instances of given Model, including query params
     * to define pagination.
     *
     * @param req
     * @param res
     */
    getAll: (req: Request, res: Response) => Promise<Response>;
    /**
     * Return single instance of Model by it's primary key.
     *
     * @param req
     * @param res
     */
    getById: (req: Request, res: Response) => Promise<Response>;
    /**
     * Create new Model instance.
     *
     * @param req
     * @param res
     */
    create: (req: Request, res: Response) => Promise<Response>;
    /**
     * Update single existing Model instance.
     *
     * @param req
     * @param res
     */
    update: (req: Request, res: Response) => Promise<Response>;
    /**
     * Delete single Model instance.
     *
     * @param req
     * @param res
     */
    delete: (req: Request, res: Response) => Promise<Response>;
    /**
     * Restore single Model instance.
     *
     * @param req
     * @param res
     */
    restore: (req: Request, res: Response) => Promise<Response>;
}
export default ModelRouter;
