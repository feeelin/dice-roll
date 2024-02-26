import {combineReducers, createStore} from 'redux'
import dicesCountReducer from "./reducers/dicesCount.js";
import popupReducer from './reducers/popup.js'
import popupContentReducer from "./reducers/poupContent.js";

const rootReducer = combineReducers(
    {
        dices: dicesCountReducer,
        popup: popupReducer,
        popupContent: popupContentReducer,
    }
);

const store = createStore(rootReducer)

export default store;
