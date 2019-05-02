import {Action as GameAction} from "../../../module/game/main/type";
import {DraggableData, DraggableEvent} from "react-draggable";

export interface Action {
    type: GameAction;
    payload?: any;
}

export const onStart = () => ({
    type: GameAction.ON_DRAG_START,
});

export const onDrag = (e: DraggableEvent, data: DraggableData) => ({
    type: GameAction.ON_DRAG,
    payload: {
        data,
    },
});

export const onStop = (e: DraggableEvent, data: DraggableData) => ({
    type: GameAction.ON_DRAG_STOP,
    payload: {
        data,
    },
});

export const onStepBackwardClick = () => ({
    type: GameAction.STEP_BACKWARD,
});

export const onStepForwardClick = () => ({
    type: GameAction.STEP_FORWARD,
});
