"use client";

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { infoModalSlice } from "./infoModal";
import { createWrapper } from "next-redux-wrapper";

export const makeStore = configureStore({
  reducer: {
    [infoModalSlice.name]: infoModalSlice.reducer,
  },
  devTools: true,
});

export type AppStore = ReturnType<typeof makeStore.getState>;
export type AppDispatch = typeof makeStore.dispatch;
