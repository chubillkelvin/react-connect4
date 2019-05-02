import {Action as GameAction, State as GameState} from "../../module/game/main/type";
import {Action} from "../actions/game";
import {Player, SlotState} from "../../type/type";
import {WinChecker} from "../../module/game/main/util/WinChecker";

const emptyBoard: SlotState[][] = [
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
    [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
];

const initialState: GameState = {
    history: [emptyBoard],
    step: 0,
    currentPlayer: Player.player1,
    currentX: 0,
    dragging: false,
    winner: null,
    showPrompt: true,
    playTickSound: false,
};

export function gameReducer(state: GameState = initialState, action: Action): GameState {
    const {payload} = action;
    const {currentPlayer, history, step} = state;
    switch (action.type) {
        case GameAction.ON_DRAG_START:
            return {...state, dragging: true, showPrompt: false, playTickSound: false};
        case GameAction.ON_DRAG:
            return {...state, currentX: payload.data.x, playTickSound: false};
        case GameAction.ON_DRAG_STOP:
            const x = payload.data.x;
            const data = history[step];
            const newData = [...data];
            const columnIndex = Math.round(x / 100);
            const rowIndex = newData[columnIndex].lastIndexOf(SlotState.available);
            if (rowIndex === -1) {
                return {...state, dragging: false, playTickSound: false};
            } else {
                newData[columnIndex][rowIndex] = currentPlayer as number;
                const newHistory: SlotState[][][] = [];
                history.forEach((data, index) => {
                    if (index <= step) {
                        newHistory.push(data);
                    } else {
                        return;
                    }
                });
                newHistory.push(newData);
                const won = WinChecker.checkWinner(newData, currentPlayer, columnIndex, rowIndex);
                return {...state, history: newHistory, step: step + 1, dragging: false, currentPlayer: currentPlayer === Player.player1 ? Player.player2 : Player.player1, winner: won ? currentPlayer : null, playTickSound: !won};
            }
        case GameAction.STEP_BACKWARD:
            if (step > 0) {
                return {...state, step: step - 1, currentPlayer: currentPlayer === Player.player1 ? Player.player2 : Player.player1};
            } else {
                return state;
            }
        case GameAction.STEP_FORWARD:
            if (step + 1 < history.length) {
                return {...state, step: step + 1, currentPlayer: currentPlayer === Player.player1 ? Player.player2 : Player.player1};
            }
            return state;
        default:
            return state;
    }
}
