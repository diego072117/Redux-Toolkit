import { useUserActions } from "../../hooks/useUsersActions";
import "./Module.scss";

type CreateNewUserProps = {
  onCloseModal: () => void;
};

export const CreateNewUser = ({ onCloseModal }: CreateNewUserProps) => {
  const { addUser } = useUserActions();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const github = formData.get("github") as string;
    addUser({ name, email, github });
    onCloseModal();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="modal-form">
        <div className="container-input">
          <label>Nombre: </label>
          <input name="name" type="text" placeholder="Name" required />
        </div>
        <div className="container-input">
          <label htmlFor="">Email: </label>
          <input name="email" type="text" placeholder="email" required />
        </div>

        <div className="container-input">
          <label htmlFor="">Github: </label>
          <input name="github" type="text" placeholder="github" required />
        </div>

        <div className="button-form-user">
          <button type="submit">Register</button>
        </div>
      </form>
    </>
  );
};
