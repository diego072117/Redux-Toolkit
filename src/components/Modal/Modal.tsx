import "./Module.scss";
type modalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: string | JSX.Element;
};

export const Modal = ({ isOpen, onClose, children }: modalProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay">
        <div className="modal-header"></div>
        <div className="modal">
          <button className="close-btn" onClick={onClose}>
            X
          </button>
          {children}
        </div>
      </div>
    </>
  );
};
