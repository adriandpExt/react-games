/* eslint-disable react/prop-types */
export const Modal = ({ open, onClose }) => {
  return (
    <dialog className={`${open ? "modal modal-open" : "modal"}`}>
      <div className="modal-box">
     
        <p className="py-4">WOW! Congratulation you won..</p>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn" onClick={onClose}>
              Close
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
