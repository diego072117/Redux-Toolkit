import "./Module.scss";
import { useAppSelector } from "../../hooks/store";
import { useUserActions } from "../../hooks/useUsers";

export const ListOfUsers = () => {
  const users = useAppSelector((state) => state.users)
  const { removeUser } = useUserActions()
  return (
    <>
    <p>Usuarios: {users.length}</p>
      <div className="container-card">
        {users.map((item) => (
          <div className="container-card" key={item.id}>
            <img
              className="img-github"
              src={`https://unavatar.io/github/${item.github}`}
              alt="No font"
            />

            <div className="user-information">
              <p className="name">{item.name}</p>
            </div>
            <div className="buttons">
              <button>Edit</button>
              <button onClick={() => removeUser(item.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
