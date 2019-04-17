import {combineReducers} from "redux";
import {RootState} from "../../type/state";
import {gameReducer} from "./game";

export const rootReducer = combineReducers<RootState>({
    game: gameReducer as any,
});
