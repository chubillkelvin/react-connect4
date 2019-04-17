import {State as GameState, Action as GameAction} from "../../module/game/main/type";
import {Player, SlotState} from "../../type/type";

interface Action {
    type: GameAction;
    payload: any;
}

const initialState: GameState = {
    data: [
        [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
        [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
        [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
        [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
        [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
        [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
        [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    ],
    currentPlayer: Player.player1,
    currentX: 0,
    dragging: false,
};

export function gameReducer(state: GameState = initialState, action: Action): GameState {
    const {payload} = action;
    switch (action.type) {
        case GameAction.ON_DRAG_START:
            return {dragging: true, ...state};
        case GameAction.ON_DRAG:
            return {currentX: payload.data.x, ...state};
        case GameAction.ON_DRAG_STOP:
            const x = action.payload.data.x;
            const {currentPlayer} = state;
            const newData = [...state.data];
            const columnIndex = Math.round(x / 100);
            const rowIndex = newData[columnIndex].lastIndexOf(SlotState.available);
            if (rowIndex === -1) {
                return {dragging: false, ...state};
            } else {
                newData[columnIndex][rowIndex] = currentPlayer as number;
                return {data: newData, dragging: false, currentPlayer: currentPlayer === Player.player1 ? Player.player2 : Player.player1, ...state};
            }
        default:
            return state;
    }
}
