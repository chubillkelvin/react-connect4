import {Store, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {dataLogger} from "./middleware/logger";
import {RootState} from "../type/state";
import {rootReducer} from "./reducers";

export function configureStore(initialState?: RootState): Store<RootState> {
    let middleware = applyMiddleware(dataLogger);

    if(process.env.NODE_ENV !== "production"){
        middleware = composeWithDevTools(middleware);
    }

    const store = createStore(rootReducer, initialState, middleware) as Store<RootState>;

    return store;
}
