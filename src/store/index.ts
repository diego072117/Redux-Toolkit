import { Middleware, configureStore } from "@reduxjs/toolkit";
import usersReducer, { rollbackUser } from "./users/slice";
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
  };

const syncWithDataBaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action;
    const previousState = store.getState();
    next(action);

    if (type === "users/deleteUserById") {
      const userIdToRemove = payload;
      const usertoRemove = previousState.users.find(
        (user: { id: string }) => user.id === userIdToRemove
      );
      fetch(`https://jsonplaceholder.typicode.com/users/${userIdToRemove}`, {
        method: "DELETE",
      })
        .then((res) => {
          if (res.ok) {
            toast.success("Usuario eliminado correctamente");
          }
          //throw new Error('Error al elimirar el usuario')
        })
        .catch((error) => {
          toast.error("Error deleting user");
          if (usertoRemove) store.dispatch(rollbackUser(usertoRemove));
          console.log(error);
        });
    }
  };

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: [persistanceLocalStorageMiddleware, syncWithDataBaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
