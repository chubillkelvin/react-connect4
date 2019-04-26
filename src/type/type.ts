export enum SlotState {
    player1,
    player2,
    available,
}

export enum Player {
    player1,
    player2,
}

export type PickOptional<T> = Pick<T, {[K in keyof T]-?: {} extends {[P in K]: T[K]} ? K : never}[keyof T]>;
