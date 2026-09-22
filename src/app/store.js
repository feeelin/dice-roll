import {combineReducers, createStore} from 'redux'
import { dicesCountReducer } from "../entities/dice";
import { popupReducer, popupContentReducer } from "../entities/roll-result";

const rootReducer = combineReducers(
    {
        dices: dicesCountReducer,
        popup: popupReducer,
        popupContent: popupContentReducer,
    }
);

const store = createStore(rootReducer)

export default store;
