import {Player, SlotState} from "../../../type/type";

export interface State {
    data: SlotState[][];
    currentPlayer: Player;
    currentX: number;
    dragging: boolean;
}

export enum Action {
    ON_DRAG_START,
    ON_DRAG,
    ON_DRAG_STOP,
}