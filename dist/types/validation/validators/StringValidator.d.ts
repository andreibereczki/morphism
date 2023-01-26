import { ValidateFunction } from '../../types';
import { ValidatorOptions } from './types';
export declare function StringValidator(options?: ValidatorOptions): ValidateFunction & {
    min: (value: number) => ValidateFunction & any;
    max: (value: number) => ValidateFunction & any;
    size: (value: number) => ValidateFunction & any;
    regex: (regex: RegExp) => ValidateFunction & any;
    alphanum: () => ValidateFunction & any;
};
