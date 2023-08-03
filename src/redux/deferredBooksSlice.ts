import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooks } from "../interfaces/Books";

interface deferredBooksState {
  deferredBooks: IBooks[];
}

const initialState: deferredBooksState = {
  deferredBooks: [],
};

const deferredBooksSlice = createSlice({
  name: "deferredBooks",
  initialState,
  reducers: {
    addDeferredBook: (state, action: PayloadAction<IBooks>) => {
      state.deferredBooks.push(action.payload);
    },
    removeDeferredBook: (state, action: PayloadAction<string>) => {
      state.deferredBooks = state.deferredBooks.filter(
        (book) => book.title !== action.payload
      );
    },
  },
});

export const { addDeferredBook, removeDeferredBook } =
  deferredBooksSlice.actions;
export default deferredBooksSlice.reducer;
