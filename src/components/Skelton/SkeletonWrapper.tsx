import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

interface SkeletonWrapperProps {
  ready: boolean;
  skeleton: React.ReactNode;
  empty?: React.ReactNode;
  component: React.ReactNode;
  data?: Array<any>;
}
export const SkeletonWrapper = ({
  ready,
  component,
  skeleton,
  empty,
  data,
}: SkeletonWrapperProps) => {
  return (
    <AnimatePresence mode="sync">
      {ready && data?.length == 0 && empty}
      {ready ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {component}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {skeleton}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
