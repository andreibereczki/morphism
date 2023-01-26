/**
 * @module morphism
 */
import { SCHEMA_OPTIONS_SYMBOL } from './helpers';
import { Schema, StrictSchema, Constructable, SourceFromSchema, Mapper, DestinationFromSchema } from './types';
import { createSchema, SchemaOptions } from './MorphismTree';
import { IMorphismRegistry } from './MorphismRegistry';
import { Reporter, reporter as defaultReporter, Formatter } from './validation/reporter';
import { Validation, IValidation } from './validation/Validation';
import { ValidatorError } from './validation/validators/ValidatorError';
import { Rule } from './validation/validators/types';
/**
 * Currying function that either outputs a mapping function or the transformed data.
 *
 * @example
 * ```js
 *
  // => Outputs a function when only a schema is provided
  const fn = morphism(schema);
  const result = fn(data);

  // => Outputs the transformed data when a schema and the input data is provided
  const result = morphism(schema, data);

  // => Outputs the transformed data as an ES6 Class Object when a schema, the input data and an ES6 Class are provided
  const result = morphism(schema, data, Foo);
  // result is type of Foo
 * ```
 * @param  {Schema} schema Structure-preserving object from a source data towards a target data
 * @param  {} items Object or Collection to be mapped
 * @param  {} type
 *
 */
declare function morphism<TSchema = Schema<DestinationFromSchema<Schema>, SourceFromSchema<Schema>>, Source extends SourceFromSchema<TSchema> = SourceFromSchema<TSchema>>(schema: TSchema, data: Source[]): DestinationFromSchema<TSchema>[];
declare function morphism<TSchema = Schema<DestinationFromSchema<Schema>, SourceFromSchema<Schema>>, Source extends SourceFromSchema<TSchema> = SourceFromSchema<TSchema>>(schema: TSchema, data: Source): DestinationFromSchema<TSchema>;
declare function morphism<TSchema = Schema<DestinationFromSchema<Schema>, SourceFromSchema<Schema>>>(schema: TSchema): Mapper<TSchema>;
declare function morphism<TSchema extends Schema, TDestination>(schema: TSchema, items: null, type: Constructable<TDestination>): Mapper<TSchema, TDestination>;
declare function morphism<TSchema = Schema<DestinationFromSchema<Schema>, SourceFromSchema<Schema>>, Target = never, Source extends SourceFromSchema<TSchema> = SourceFromSchema<TSchema>>(schema: TSchema, items: Source, type: Constructable<Target>): Target;
declare function morphism<TSchema = Schema<DestinationFromSchema<Schema>, SourceFromSchema<Schema>>, Target = never, Source extends SourceFromSchema<TSchema> = SourceFromSchema<TSchema>>(schema: TSchema, items: Source[], type: Constructable<Target>): Target[];
/**
 * Function Decorator transforming the return value of the targeted Function using the provided Schema and/or Type
 *
 * @param {Schema<Target>} schema Structure-preserving object from a source data towards a target data
 * @param {Constructable<Target>} [type] Target Class Type
 */
export declare function morph<Target>(schema: Schema<Target>, type?: Constructable<Target>): (_target: any, _name: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Function Decorator transforming the return value of the targeted Function to JS Object(s) using the provided Schema
 *
 * @param {StrictSchema<Target>} schema Structure-preserving object from a source data towards a target data
 */
export declare function toJSObject<Target>(schema: StrictSchema<Target>): (_target: any, _name: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
/**
 * Function Decorator transforming the return value of the targeted Function using the provided Schema and Class Type
 *
 * @param {Schema<Target>} schema Structure-preserving object from a source data towards a target data
 * @param {Constructable<Target>} [type] Target Class Type
 */
export declare function toClassObject<Target>(schema: Schema<Target>, type: Constructable<Target>): (_target: any, _name: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
declare const Morphism: typeof morphism & IMorphismRegistry;
export { morphism, createSchema, Schema, StrictSchema, SchemaOptions, Mapper, SCHEMA_OPTIONS_SYMBOL, Reporter, defaultReporter as reporter, Formatter, Validation, Rule, ValidatorError, IValidation, };
export default Morphism;
