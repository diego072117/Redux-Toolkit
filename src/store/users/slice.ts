import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toast } from "sonner";

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
    email: "Santielproxd@gmail.com",
    github: "santicarreno13",
  },
  {
    id: "3",
    name: "Johan Avendaño",
    email: "JohanAvendaño@gmail.com",
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
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      state.push({ id, ...action.payload });
      toast.success("Usuario registrado correctamente");
      //return [...state, { id, ...action.payload }];
    },
    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    },
    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(
        (user) => user.id === action.payload.id
      );
      if (!isUserAlreadyDefined) {
        state.push(action.payload);
        //return [...state, action.payload];
      }
    },
  },
});

export default usersSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = usersSlice.actions;
