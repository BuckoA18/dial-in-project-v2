import { X } from "lucide-react";
import IconButton from "./IconButton";

const Modal = ({ onToggle, children }) => {
  return (
    <div
      onClick={onToggle}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm transition-opacity"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="z-99 flex h-fit w-full max-w-160 flex-col gap-2 rounded-2xl bg-neutral-950 p-2 sm:p-4 lg:max-w-280"
      >
        {children}
      </div>
    </div>
  );
};

Modal.Header = ({ children, onToggle }) => {
  return (
    <div className="relative mb-4 flex items-center justify-center">
      <IconButton
        className="absolute top-0 right-0 text-neutral-200"
        onClick={onToggle}
      >
        <X />
      </IconButton>
      {children}
    </div>
  );
};

Modal.Body = ({ children }) => {
  return <div className="">{children}</div>;
};

Modal.Actions = ({ children }) => {
  return <div className="mt-4">{children}</div>;
};

export default Modal;
