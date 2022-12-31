import {combineReducers, legacy_createStore as createStore} from "redux";
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";

const reducers = combineReducers(({
    profilePage: profileReducer,
    messagesPage: messageReducer,
}))

const store = createStore(reducers);

export default store;