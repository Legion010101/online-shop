import {configureStore,combineReducers} from "@reduxjs/toolkit";
import navLink from "./modules/Module_Navigation/redux/navLink";


const rootReducer = combineReducers({
    navLink:navLink,
})
const store =  configureStore({
    reducer:rootReducer
})
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch