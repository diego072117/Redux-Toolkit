import { CreateNewUser } from "../../components/CreateNewUser/CreateNewUser";
import { ListOfUsers } from "../../components/ListOfUsers/ListOfUsers";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import "./Module.scss";

export const Home = () => {
  const [modalNewUser, setModalNewUser] = useState(false);

  const modalNewUserState = () => {
    setModalNewUser(!modalNewUser);
  };

  return (
    <>
      <div className="container-users">
        <div className="new-user">
          <button className="button-new-user" onClick={modalNewUserState}>
            New user
          </button>
        </div>
        <ListOfUsers />
      </div>
      <Modal isOpen={modalNewUser} onClose={modalNewUserState} title="New User">
        <CreateNewUser onCloseModal={modalNewUserState} />
      </Modal>
    </>
  );
};
