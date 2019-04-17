/* tslint:disable */
import {Middleware} from "redux";

export const dataLogger: Middleware = store => next => action => {
    if (process.env.NODE_ENV !== "production") {
        console.log(action);
    }
    return next(action);
};
