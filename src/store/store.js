import {combineReducers, createStore} from 'redux'
import dicesCountReducer from "./reducers/dicesCount.js";

const rootReducer = combineReducers(
    {
        dices: dicesCountReducer,
    }
);

const store = createStore(rootReducer)

export default store;
