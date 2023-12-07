'use client'

import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./slices/weather-slice";
import cityTakenReducer  from "./slices/city-slice";
import { TypedUseSelectorHook, useSelector } from "react-redux";

export const store = configureStore({
    reducer:{
        weatherReducer,
        cityTakenReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export type appDispatch = typeof store.dispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 
