import { createSlice } from "@reduxjs/toolkit";

const gridShowSlice = createSlice({
  name: "grid",
  initialState: {
    isShowGrid: true,
  },
  reducers: {
    showGrid: (state, action) => {
      state.isShowGrid = false;
    },
    showRow: (state, action) => {
      state.isShowGrid = true;
    },
  },
});
export const { showGrid, showRow } = gridShowSlice.actions;
export default gridShowSlice.reducer;
