const Modal = ({ onCloseModal, children }) => {
  return (
    <div
      onClick={() => {
        onCloseModal();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-99 min-h-120 w-full max-w-160 rounded-2xl bg-neutral-950 p-2 sm:p-4 lg:max-w-280"
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
