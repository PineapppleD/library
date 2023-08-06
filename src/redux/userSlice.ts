import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBooks } from "../interfaces/Books";

interface User {
  name: string;
  password: string;
  deferredBooks: IBooks[];
}

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
    addDeferredBook: (state, action: PayloadAction<IBooks>) => {
      if (state.user) {
        state.user.deferredBooks.push(action.payload);
      }
    },
    removeDeferredBook: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.deferredBooks = state.user.deferredBooks.filter(
          (book) => book.title !== action.payload
        );
      }
    },
  },
});

export const { addUser, removeUser, addDeferredBook, removeDeferredBook } =
  userSlice.actions;
export default userSlice.reducer;
