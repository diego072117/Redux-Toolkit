import { CreateNewUser } from "../../components/CreateNewUser/CreateNewUser";
import { ListOfUsers } from "../../components/ListOfUsers/ListOfUsers";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";
import "./Module.scss";

export const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="container-users">
        <div className="new-user">
          <button className="button-new-user" onClick={handleStateModal}>
            New user
          </button>
        </div>
        <ListOfUsers />
      </div>
      <Modal isOpen={isOpen} onClose={handleStateModal}>
        <CreateNewUser onCloseModal={handleStateModal} />
      </Modal>
    </>
  );
};
