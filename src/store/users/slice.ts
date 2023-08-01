import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Diego Parra",
    email: "parracalderond9@gmail.com",
    github: "diego072117",
  },
  {
    id: "2",
    name: "Santiago Carreño",
    email: "parracalderond9@gmail.com",
    github: "santicarreno13",
  },
  {
    id: "3",
    name: "Johan Avendaño",
    email: "parracalderond9@gmail.com",
    github: "Johan505",
  },
];

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const initialState: UserWithId[] = (() => {
  const persistedState = localStorage.getItem("__redux__state__");
  return persistedState ? JSON.parse(persistedState).users : DEFAULT_STATE;
})();

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    },
  },
});

export default usersSlice.reducer;

export const { deleteUserById } = usersSlice.actions;
