import { ValidateFunction } from '../../types';
import { ValidatorOptions } from './types';
export declare function NumberValidator(options?: ValidatorOptions): ValidateFunction & {
    min: (value: any) => ValidateFunction & any;
    max: (value: any) => ValidateFunction & any;
};
