import { Constructable, Schema, Mapper } from './types';
import { StrictSchema } from './morphism';
export interface IMorphismRegistry {
    /**
     * Register a mapping schema for a Class.
     *
     * @param type Class Type to be registered
     * @param schema Structure-preserving object from a source data towards a target data.
     *
     */
    register<Target>(type: Constructable<Target>): Mapper<Schema<Target>, Target>;
    register<Target, TSchema extends Schema | StrictSchema>(type: Constructable<Target>, schema?: TSchema): Mapper<TSchema, Target>;
    /**
     * Transform any input in the specified Class
     *
     * @param {Type} type Class Type of the ouput Data
     * @param {Object} data Input data to transform
     *
     */
    map<Target>(type: Constructable<Target>): Mapper<Schema, Target>;
    map<Target, Source>(type: Constructable<Target>, data: Source[]): Target[];
    map<Target, Source>(type: Constructable<Target>, data: Source): Target;
    /**
     * Get a specific mapping function for the provided Class
     *
     * @param {Type} type Class Type of the ouput Data
     *
     */
    getMapper<Target>(type: Constructable<Target>): Mapper<Schema, Target>;
    /**
     * Set a schema for a specific Class Type
     *
     * @param {Type} type Class Type of the ouput Data
     * @param {Schema} schema Class Type of the ouput Data
     *
     */
    setMapper<Target, TSchema extends Schema<Target>>(type: Constructable<Target>, schema: TSchema): Mapper<any, Target>;
    /**
     * Delete a registered schema associated to a Class
     *
     * @param type ES6 Class Type of the ouput Data
     *
     */
    deleteMapper<Target>(type: Constructable<Target>): any;
    /**
     * Check if a schema has already been registered for this type
     *
     * @param {*} type
     */
    exists<Target>(type: Target): boolean;
    /**
     * Get the list of the mapping functions registered
     *
     * @param {Type} type Class Type of the ouput Data
     *
     */
    mappers: Map<any, any>;
}
export declare class MorphismRegistry implements IMorphismRegistry {
    private _registry;
    /**
     *Creates an instance of MorphismRegistry.
     * @param {Map<any, any>} cache Cache implementation to store the mapping functions.
     */
    constructor();
    /**
     * Register a mapping schema for a Class.
     *
     * @param type Class Type to be registered
     * @param schema Structure-preserving object from a source data towards a target data.
     *
     */
    register<Target, TSchema>(type: Constructable<Target>, schema?: TSchema): Mapper<TSchema, Target>;
    /**
     * Transform any input in the specified Class
     *
     * @param {Type} type Class Type of the ouput Data
     * @param {Object} data Input data to transform
     *
     */
    map(type: any, data?: any): any;
    /**
     * Get a specific mapping function for the provided Class
     *
     * @param {Type} type Class Type of the ouput Data
     *
     */
    getMapper<Target>(type: Constructable<Target>): any;
    /**
     * Set a schema for a specific Class Type
     *
     * @param {Type} type Class Type of the ouput Data
     * @param {Schema} schema Class Type of the ouput Data
     *
     */
    setMapper<Target>(type: Constructable<Target>, schema: Schema<Target>): Mapper<Schema<Target, any>, Target>;
    /**
     * Delete a registered schema associated to a Class
     *
     * @param type ES6 Class Type of the ouput Data
     *
     */
    deleteMapper(type: any): any;
    /**
     * Check if a schema has already been registered for this type
     *
     * @param {*} type
     */
    exists(type: any): any;
    /**
     * Get the list of the mapping functions registered
     *
     * @param {Type} type Class Type of the ouput Data
     *
     */
    get mappers(): Map<any, any>;
}
