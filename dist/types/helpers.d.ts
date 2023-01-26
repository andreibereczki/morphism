import { ActionSelector, ActionAggregator, ActionFunction } from './types';
/**
 * Symbol identifier used to store options on a Morphism schema. Using the `createSchema` helper to avoid using the symbol directly.
 *
 * @example
 * ```typescript
 * import { SCHEMA_OPTIONS_SYMBOL } from 'morphism';
 *
 * const options: SchemaOptions = { class: { automapping: true }, undefinedValues: { strip: true } };
 * const schema: Schema = { targetProperty: 'sourceProperty', [SCHEMA_OPTIONS_SYMBOL]: options }

 * ```
 */
export declare const SCHEMA_OPTIONS_SYMBOL: unique symbol;
export declare function isActionSelector<S, R>(value: any): value is ActionSelector<S, R>;
export declare function isActionString(value: any): value is string;
export declare function isActionAggregator(value: any): value is ActionAggregator;
export declare function isActionFunction(value: any): value is ActionFunction;
export declare function isValidAction(action: any): boolean;
export declare const aggregator: (paths: string[], object: any) => {};
export declare function isUndefined(value: any): boolean;
export declare function isObject(value: any): value is object;
export declare function isString(value: any): value is string;
export declare function isFunction(value: any): value is (...args: any[]) => any;
export declare function isPromise(object: any): boolean;
export declare function get(object: any, path: string): any;
export declare function zipObject(props: string[], values: any[]): {};
export declare function set(obj: any, path: any, value: any, doNotReplace?: boolean): any;
export declare function isEmptyObject(obj: object): boolean;
