export interface ValidatorErrorInfos {
    value: unknown;
    expect: string;
}
export declare class ValidatorError extends Error {
    value: unknown;
    expect: string;
    constructor(infos: ValidatorErrorInfos);
}
