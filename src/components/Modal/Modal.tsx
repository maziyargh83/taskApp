import { FiX } from "react-icons/fi";
import ReactModal from "react-modal";
import { clsx } from "clsx";
import { PropsWithChildren } from "react";
interface ModalProps {
  close: () => void;
  isOpen: boolean;
  className?: string;
  fullScreen?: boolean;
}
ReactModal.setAppElement("#root");
export const Modal = ({
  close,
  isOpen,
  className,
  children,
  fullScreen = false,
}: PropsWithChildren<ModalProps>) => {
  return (
    <ReactModal
      isOpen={isOpen}
      overlayClassName={"fixed inset-0 bg-black/50"}
      className={clsx("absolute inset-10 rounded outline-none p-5", {
        [className!]: !!className,
        "left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%] ":
          !fullScreen,
      })}
      onRequestClose={close}
    >
      <div
        onClick={close}
        className="absolute -top-2 hover:shadow-lg hover:shadow-body transition-shadow duration-150 rounded flex justify-center items-center -right-2 w-6 h-6 bg-light"
      >
        <FiX className="text-tertiary" />
      </div>
      {children}
    </ReactModal>
  );
};
