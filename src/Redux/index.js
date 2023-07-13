import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import reducers from "./rootReducer";

const Store=configureStore({
    reducer:reducers,
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(logger)
    }
})

export default Store;