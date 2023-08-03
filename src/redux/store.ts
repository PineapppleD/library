import { configureStore } from "@reduxjs/toolkit";
import deferredBooksReducer from "./deferredBooksSlice";
import booksReducer from "./booksSlice";
import searchReducer from "./searchSlice";

const store = configureStore({
  reducer: {
    deferredBooks: deferredBooksReducer,
    books: booksReducer,
    search: searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
