export declare class ModalIdGenerator {
    private static INSTANCE;
    private lastId;
    private constructor();
    static getInstance(): ModalIdGenerator;
    generate(): number;
}
