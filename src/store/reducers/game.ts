import {Action as GameAction, State as GameState} from "../../module/game/main/type";
import {Action} from "../actions/game";
import {Player, SlotState} from "../../type/type";
import {WinChecker} from "../../module/game/main/util/WinChecker";

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
    winner: null,
    showPrompt: true,
    playTickSound: false,
};

export function gameReducer(state: GameState = initialState, action: Action): GameState {
    const {payload} = action;
    switch (action.type) {
        case GameAction.ON_DRAG_START:
            return {...state, dragging: true, showPrompt: false, playTickSound: false};
        case GameAction.ON_DRAG:
            return {...state, currentX: payload.data.x, playTickSound: false};
        case GameAction.ON_DRAG_STOP:
            const x = action.payload.data.x;
            const {currentPlayer} = state;
            const newData = [...state.data];
            const columnIndex = Math.round(x / 100);
            const rowIndex = newData[columnIndex].lastIndexOf(SlotState.available);
            if (rowIndex === -1) {
                return {dragging: false, ...state, playTickSound: false};
            } else {
                newData[columnIndex][rowIndex] = currentPlayer as number;
                const won = WinChecker.checkWinner(newData, currentPlayer, columnIndex, rowIndex);
                return {...state, data: newData, dragging: false, currentPlayer: currentPlayer === Player.player1 ? Player.player2 : Player.player1, winner: won ? currentPlayer : null, playTickSound: !won};
            }
        default:
            return state;
    }
}
