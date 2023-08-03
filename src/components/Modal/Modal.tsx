import "./Module.scss";
type modalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: string | JSX.Element;
};

export const Modal = ({ isOpen, title, onClose, children }: modalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal">
          <div className="modal-header">
            <p>{title}</p>
            <button className="close-btn" onClick={onClose}>
              X
            </button>
          </div>
          <div className="modal-content">

          {children}
          </div>
        </div>
      </div>
    </>
  );
};
