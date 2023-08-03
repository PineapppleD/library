import { configureStore } from "@reduxjs/toolkit";
import deferredBooksReducer from "./deferredBooksSlice";
import booksReducer from "./booksSlice";

const store = configureStore({
  reducer: {
    deferredBooks: deferredBooksReducer,
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
