import { StringValidator, BooleanValidator, NumberValidator } from './validators';
declare type ValidatorsMap = Omit<IValidation, 'addValidator'>;
declare type Validators = IValidation[keyof ValidatorsMap];
declare type ValidatorsKeys = keyof ValidatorsMap;
export interface IValidation {
    string: typeof StringValidator;
    number: typeof NumberValidator;
    boolean: typeof BooleanValidator;
    addValidator<T extends ValidatorsKeys, U extends Validators>(name: T, validator: U): void;
}
declare const Validation: IValidation;
export { Validation };
