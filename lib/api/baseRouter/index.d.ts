import { Router } from 'express';
declare class BaseRouter {
    readonly router: Router;
    /**
     * Create express Router instance
     */
    constructor();
    /**
     * Return express Router instance.
     */
    getRouter(): Router;
}
export default BaseRouter;
