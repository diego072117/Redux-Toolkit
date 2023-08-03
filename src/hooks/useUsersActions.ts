import { UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./store";

export const useUserActions = () => {
  const dispatch = useAppDispatch();

  const addUser = ({name, email, github}: { name: string, email: string, github: string }) => {
    dispatch(addNewUser({name, email, github}))
  }

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return { addUser, removeUser };
};
