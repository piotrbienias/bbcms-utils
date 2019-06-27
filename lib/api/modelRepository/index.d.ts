import { BuildOptions, Model } from 'sequelize';
/**
 * Query Results Options
 */
export interface QueryOptions {
    page?: number;
    perPage?: number;
    order?: string;
    orderBy?: string;
    scope?: string[];
}
/**
 * Base Sequelize Model Static type
 */
export declare type ModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Model;
};
/**
 * Base Model Repository Interface
 */
export interface ModelRepositoryInterface<M, MS> {
    model: MS;
    defaultQueryOptions: object;
    getAll(scope: string[], options?: QueryOptions): Promise<M[]>;
    getById(id: any): Promise<M>;
    create(data: object): Promise<M>;
    update(instance: M, data: object): Promise<M>;
    delete(instance: M): Promise<void>;
    restore(instance: M): Promise<void>;
    validateQueryOptions(options: QueryOptions): void;
}
/**
 * Base Model Repository with standard methods.
 * M - model class
 * MS - model static type representation
 *
 * @class ModelRepository
 */
declare class ModelRepository<M extends Model, MS extends ModelStatic> implements ModelRepositoryInterface<M, MS> {
    /**
     * Repository Sequelize Model
     */
    model: MS;
    /**
     * Query Options
     */
    defaultQueryOptions: {
        page: number;
        perPage: number;
        order: string;
        orderBy: string;
    };
    constructor(model: MS);
    /**
     * Return all records of given Model with possibility of paginating results.
     *
     * @param options
     * @param scope
     */
    getAll(scope?: string[], options?: QueryOptions): Promise<M[]>;
    /**
     * Return single Model record by PK.
     *
     * @param id
     */
    getById(id: any): Promise<M>;
    /**
     * Create new Model record.
     *
     * @param data
     */
    create(data: object): Promise<M>;
    /**
     * Update single Model record.
     *
     * @param instance
     * @param data
     */
    update(instance: M, data: object): Promise<M>;
    /**
     * Delete single Model record.
     *
     * @param instance
     */
    delete(instance: M): Promise<void>;
    /**
     * Restore single Model record.
     *
     * @param instance
     */
    restore(instance: M): Promise<void>;
    /**
     * Validate query options against specific rules and apply default values
     * if necessary.
     *
     * @param options
     */
    validateQueryOptions(options: QueryOptions): void;
}
export default ModelRepository;
