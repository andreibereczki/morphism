export declare class User {
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    type?: string;
    groups: Array<any>;
    constructor(firstName?: string, lastName?: string, phoneNumber?: string);
    /**
     * Use to test runtime access to the created object context
     * @param {} group
     * @param {} externalTrigger
     */
    addToGroup(group: any, externalTrigger: any): void;
}
export interface MockData {
    firstName: string;
    lastName: string;
    age: number;
    address: {
        streetAddress: string;
        city: string;
        state: string;
        postalCode: string;
    };
    phoneNumber: [
        {
            type: string;
            number: string;
        },
        {
            type: string;
            number: string;
        }
    ];
}
