import { ValidatorError } from '../morphism';
export declare const ERRORS: unique symbol;
export declare class ValidationError extends Error {
    targetProperty: string;
    innerError: ValidatorError;
    constructor(infos: {
        targetProperty: string;
        innerError: ValidatorError;
    });
}
export declare class ValidationErrors extends Error {
    errors: Set<ValidationError>;
    reporter: Reporter;
    target: unknown;
    constructor(reporter: Reporter, target: unknown);
    addError(error: ValidationError): void;
}
export interface Validation {
    [ERRORS]: ValidationErrors;
}
export declare function targetHasErrors(target: any): target is Validation;
export declare function defaultFormatter(error: ValidationError): string;
/**
 * Formatting function called by the reporter for each errors found during the mapping towards a target.
 *
 * @interface Formatter
 */
export interface Formatter {
    (error: ValidationError): string;
}
/**
 * Class to handle reporting of errors found on a target when executing a mapping.
 *
 * @class Reporter
 */
export declare class Reporter {
    private formatter;
    constructor(formatter?: Formatter);
    /**
     * Report a list of messages corresponding to the errors found during the transformations. Returns null when no errors has been found.
     *
     * @param {*} target
     * @returns {string[] | null}
     * @memberof Reporter
     */
    report(target: any): string[] | null;
    extractErrors(target: any): ValidationErrors | null;
}
/**
 * Singleton instance of a Reporter class.
 *
 */
export declare const reporter: Reporter;
