import {WinChecker} from "../module/game/main/util/WinChecker";
import {Player, SlotState} from "../type/type";

test("Winning Conditions", () => {
    const state1 = {
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
        currentColIndex: 0,
        currentRowIndex: 0,
    };
    expect(WinChecker.checkWinner(state1.data, state1.currentPlayer, state1.currentColIndex, state1.currentRowIndex)).toBeFalsy();

    const state2 = {
        data: [
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.player2, SlotState.player1],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.player2, SlotState.player1],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.player2, SlotState.player1],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.player1],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
        ],
        currentPlayer: Player.player1,
        currentColIndex: 3,
        currentRowIndex: 5,
    };
    expect(WinChecker.checkWinner(state2.data, state2.currentPlayer, state2.currentColIndex, state2.currentRowIndex)).toBeTruthy();

    const state3 = {
        data: [
            [SlotState.available, SlotState.available, SlotState.player1, SlotState.player1, SlotState.player1, SlotState.player1],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.player2, SlotState.player2, SlotState.player2],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
        ],
        currentPlayer: Player.player1,
        currentColIndex: 0,
        currentRowIndex: 2,
    };
    expect(WinChecker.checkWinner(state3.data, state3.currentPlayer, state3.currentColIndex, state3.currentRowIndex)).toBeTruthy();

    const state4 = {
        data: [
            [SlotState.available, SlotState.available, SlotState.player2, SlotState.player2, SlotState.player1, SlotState.player2],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.player2, SlotState.player1, SlotState.player1],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.player2, SlotState.player1],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.player2],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.player1],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
            [SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available, SlotState.available],
        ],
        currentPlayer: Player.player2,
        currentColIndex: 3,
        currentRowIndex: 5,
    };
    expect(WinChecker.checkWinner(state4.data, state4.currentPlayer, state4.currentColIndex, state4.currentRowIndex)).toBeTruthy();
});
