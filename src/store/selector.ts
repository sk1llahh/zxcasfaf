import {createSelector} from "@reduxjs/toolkit";

import {RootState} from "./index";

const select = (state: RootState) => state;

const selectCommon = (select: RootState) => select.common;


export const selectStore = createSelector(
  selectCommon,

  (
    common
  ) => ({
    common
  }));
