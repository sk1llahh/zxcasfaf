import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {
  SET, CURRENT, BLOCK,
} from "../constants";


const initialState = {
  block: {
    current: null,
    total: null
  },
};

export default createReducer(initialState, builder =>
  builder
    .addCase(SET + CURRENT + BLOCK, (state, {payload}: PayloadAction<any>) => ({
      ...state,
      block: {
        current: payload.current,
        total: payload.total,
      },
    }))
)


