import "./Module.scss";
import { useAppSelector } from "../../hooks/store";
import { useUserActions } from "../../hooks/useUsersActions";

export const ListOfUsers = () => {
  const users = useAppSelector((state) => state.users);
  const { removeUser } = useUserActions();
  return (
    <>
      {/* <p>Usuarios: {users.length}</p> */}
      <div className="container-card">
        {users.map((item) => (
          <div className="content-card" key={item.id}>
            <img
              className="img-github"
              src={`https://unavatar.io/github/${item.github}`}
              alt="No font"
            />

            <div className="user-information">
              <p className="name">{item.name}</p>
              <p className="name">{item.email}</p>
            </div>
            <div className="buttons">
              <button>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button onClick={() => removeUser(item.id)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
