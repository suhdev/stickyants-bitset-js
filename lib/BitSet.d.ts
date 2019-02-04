export declare class BitSet {
    vector: number[];
    update(idx: number, val: boolean): void;
    expand(idx: number): void;
    getBit(idx: number): number;
    toggle(idx: number): void;
    set(idx: number): void;
    clear(idx: number): void;
    isSet(idx: number): boolean;
    isClear(idx: number): boolean;
    getValue(): number[];
    toString(): string;
}
