export declare class LinkedList<T> {
    private data;
    next: LinkedList<T> | null;
    head: LinkedList<T> | null;
    tail: LinkedList<T>;
    constructor(data: T);
    append(data: T): void;
    values(): Generator<T, void, unknown>;
}
