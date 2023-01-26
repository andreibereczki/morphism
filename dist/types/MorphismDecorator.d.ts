import { Mapper } from './types';
export declare function decorator<Target>(mapper: Mapper<Target>): (_target: any, _name: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
