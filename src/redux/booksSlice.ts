import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { IBooks } from "../interfaces/Books";
import axios from "axios";

interface BooksSliceState {
  books: any;
  isLoading: boolean;
  error: string;
}

const initialState: BooksSliceState = {
  books: [],
  isLoading: true,
  error: "",
};

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
  const api_key = import.meta.env.VITE_API_KEY;
  const response = await axios.get(
    `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${api_key}`
  );

  return response.data.results.books;
});

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  // fetchBooks: (state) => {
  //     state.isLoading = true
  // },
  // fetchBooksSucces: (state, action: PayloadAction<IBooks[]>) => {
  //     state.isLoading = false;
  //     state.books = action.payload;
  //     state.error = ''
  // },
  // fetchBooksError: (state, action: PayloadAction<string>) => {
  //     state.isLoading = false
  //     state.error = action.payload
  // }
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBooks.fulfilled, (state, action: PayloadAction<IBooks>) => {
        state.isLoading = false;
        state.error = "";
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action: PayloadAction<any>) => {
        console.log(action.payload);
        state.error = action.payload;
        state.isLoading = false;
      });
  },
});

// export const {fetchBooks, fetchBooksSucces, fetchBooksError} = booksSlice.actions;
export default booksSlice.reducer;
