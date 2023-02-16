import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    history: [],
  },
  reducers: {
    getHistory(state, action) {
      console.log("action", action);
      state.history = action.payload.history;
    },
  },
});

export const { getHistory } = todoSlice.actions;

export const fetchHistory = () => {
  return async function (dispatch) {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (response.ok) {
      const data = await response.json();

      dispatch(getHistory({ history: data }));
    }
  };
};

export default todoSlice.reducer;
