import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooks } from "../interfaces/Books";

interface searchState {
  foundBook: IBooks | null;
  searchInput: string;
}

const initialState: searchState = {
  foundBook: null,
  searchInput: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchBook: (state, action: PayloadAction<IBooks>) => {
      state.foundBook = action.payload;
    },
    fillSearchValue: (state, action: PayloadAction<string>) => {
      state.searchInput = action.payload;
    },
  },
});

export const { searchBook, fillSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
