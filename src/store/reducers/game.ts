import {State as GameState, Action as GameAction} from "../../module/game/main/type";
import {Action} from "../actions/game";
import {Player, SlotState} from "../../type/type";

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
            return {...state, dragging: true};
        case GameAction.ON_DRAG:
            return {...state, currentX: payload.data.x};
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
                return {...state, data: newData, dragging: false, currentPlayer: currentPlayer === Player.player1 ? Player.player2 : Player.player1};
            }
        default:
            return state;
    }
}
