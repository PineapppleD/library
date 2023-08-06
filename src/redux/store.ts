import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./booksSlice";
import searchReducer from "./searchSlice";
import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    books: booksReducer,
    search: searchReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
