import { useUserActions } from "../../hooks/useUsersActions";

type CreateNewUserProps = {
  onCloseModal: () => void;
}

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
      <h1>Create New User</h1>

      <form onSubmit={handleSubmit} className="modal-form">
        <input name="name" type="text" placeholder="Name" required />
        <input name="email" type="text" placeholder="email" required />
        <input name="github" type="text" placeholder="github" required />

        <button type="submit">New</button>
      </form>
    </>
  );
};
