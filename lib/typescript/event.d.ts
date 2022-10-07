export declare class Event<T = void> {
    value: T;
    constructor(...[value]: T extends void ? [] : [T]);
}
