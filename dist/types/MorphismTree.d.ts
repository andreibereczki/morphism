import { Actions, Schema, StrictSchema } from './types';
import { Reporter } from './validation/reporter';
export declare enum NodeKind {
    Root = "Root",
    Property = "Property",
    ActionFunction = "ActionFunction",
    ActionAggregator = "ActionAggregator",
    ActionString = "ActionString",
    ActionSelector = "ActionSelector"
}
declare type PreparedAction = (params: {
    object: any;
    items: any;
    objectToCompute: any;
}) => any;
interface SchemaNodeData<Target, Source> {
    propertyName: string;
    action: Actions<Target, Source> | null;
    preparedAction?: PreparedAction | null;
    kind: NodeKind;
    targetPropertyPath: string;
}
export interface SchemaNode<Target, Source> {
    data: SchemaNodeData<Target, Source>;
    parent: SchemaNode<Target, Source> | null;
    children: SchemaNode<Target, Source>[];
}
declare type Overwrite<T1, T2> = {
    [P in Exclude<keyof T1, keyof T2>]: T1[P];
} & T2;
declare type AddNode<Target, Source> = Overwrite<SchemaNodeData<Target, Source>, {
    kind?: NodeKind;
    targetPropertyPath?: string;
    preparedAction?: (...args: any) => any;
}>;
/**
 * Options attached to a `Schema` or `StrictSchema`
 */
export interface SchemaOptions<Target = any> {
    /**
     * Specify how to handle ES6 Class
     * @memberof SchemaOptions
     */
    class?: {
        /**
         * Specify wether ES6 Class fields should be automapped if names on source and target match
         * @default true
         * @type {boolean}
         */
        automapping: boolean;
    };
    /**
     * Specify how to handle undefined values mapped during the transformations
     * @memberof SchemaOptions
     */
    undefinedValues?: {
        /**
         * Undefined values should be removed from the target
         * @default false
         * @type {boolean}
         */
        strip: boolean;
        /**
         * Optional callback to be executed for every undefined property on the Target
         * @function default
         */
        default?: (target: Target, propertyPath: string) => any;
    };
    /**
     * Schema validation options
     * @memberof SchemaOptions
     */
    validation?: {
        /**
         * Should throw when property validation fails
         * @default false
         * @type {boolean}
         */
        throw: boolean;
        /**
         * Custom reporter to use when throw option is set to true
         * @default false
         * @type {boolean}
         */
        reporter?: Reporter;
    };
}
/**
 * A utility function that allows defining a `StrictSchema` with extra-options e.g: how to handle `undefinedValues`
 *
 * @param {StrictSchema} schema
 * @param {SchemaOptions<Target>} [options]
 */
export declare function createSchema<Target = any, Source = any>(schema: StrictSchema<Target, Source>, options?: SchemaOptions<Target>): StrictSchema<Target, Source>;
export declare class MorphismSchemaTree<Target, Source> {
    schemaOptions: SchemaOptions<Target>;
    root: SchemaNode<Target, Source>;
    schema: Schema | StrictSchema | null;
    constructor(schema: Schema<Target, Source> | StrictSchema<Target, Source> | null);
    static getSchemaOptions<Target>(schema: Schema | StrictSchema | null): SchemaOptions<Target>;
    private parseSchema;
    traverseBFS(): Generator<SchemaNode<Target, Source>, void, unknown>;
    add(data: AddNode<Target, Source>, targetPropertyPath?: string): void;
    getActionKind(data: AddNode<Target, Source>): NodeKind.Property | NodeKind.ActionFunction | NodeKind.ActionAggregator | NodeKind.ActionString | NodeKind.ActionSelector;
    getPreparedAction(nodeData: SchemaNodeData<Target, Source>): PreparedAction | null | undefined;
    private processValidationResult;
    private addErrorToTarget;
}
export {};
