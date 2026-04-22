import {createAction, createReducer} from "@reduxjs/toolkit";

export const changeCounterValuesAC = createAction<{
    startValue: number,
    maxValue: number,
    counterValue: number
}>("counter/changeCounterValues");

export const incrementCounterAC = createAction("counter/counterValue/incrementCounterValue");
export const resetCounterAC = createAction("counter/counterValue/resetCounterValue");
export const changeEditModeAC = createAction<{isEditMode: boolean}>("counter/changeEditMode/changeEditMode");

const initialState: CounterValues = {
    startValue: 0,
    maxValue: 5,
    counterValue: 0,
    isEditMode: false
}

export const counterReducer = createReducer(initialState, builder => {
    builder
        .addCase(changeCounterValuesAC, (state, action) => {
            state.startValue = action.payload.startValue
            state.maxValue = action.payload.maxValue
            state.counterValue = action.payload.counterValue
        })
        .addCase(incrementCounterAC, (state) => {
            state.counterValue = state.counterValue >= state.maxValue ? state.maxValue : state.counterValue + 1
        })
        .addCase(resetCounterAC, (state) => {
            state.counterValue = state.startValue
        })
        .addCase(changeEditModeAC, (state, action) => {
            state.isEditMode = action.payload.isEditMode
        })
})

export type CounterValues = {
    startValue: number,
    maxValue: number,
    counterValue: number,
    isEditMode: boolean
}