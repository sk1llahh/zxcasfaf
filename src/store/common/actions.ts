import {createAction} from "@reduxjs/toolkit";

import {
  SET, CURRENT, BLOCK,
} from "../constants";

export const setCurrentBlock = createAction<any>(SET + CURRENT + BLOCK);
