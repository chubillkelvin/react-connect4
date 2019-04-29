import {Player, SlotState} from "../../../type/type";

export interface State {
    history: SlotState[][][];
    step: number;
    currentPlayer: Player;
    currentX: number;
    dragging: boolean;
    winner: Player | null;
    showPrompt: boolean;
    playTickSound: boolean;
}

export enum Action {
    ON_DRAG_START,
    ON_DRAG,
    ON_DRAG_STOP,
    STEP_BACK,
    STEP_FORWARD,
}
