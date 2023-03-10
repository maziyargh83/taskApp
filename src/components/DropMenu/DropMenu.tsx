import { AnimatePresence, motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";
import { FiChevronRight, FiChevronDown, FiPlus } from "react-icons/fi";
interface DropMenuProps {
  defaultOpen?: boolean;
  title: string;
  plus?: boolean;
  onPlus?: () => void;
}
export const DropMenu = ({
  defaultOpen = false,
  title,
  children,
  plus,
  onPlus,
}: PropsWithChildren<DropMenuProps>) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div>
      <div className="flex items-center  cursor-pointer justify-between">
        <div
          className="flex space-x-2 flex-1 items-center "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <FiChevronDown /> : <FiChevronRight />}
          <span>{title}</span>
        </div>
        {plus && (
          <div
            onClick={() => {
              onPlus && onPlus();
              setIsOpen(true);
            }}
          >
            <FiPlus />
          </div>
        )}
      </div>
      <AnimatePresence mode="sync" initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
