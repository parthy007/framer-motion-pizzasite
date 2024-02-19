import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const modalVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={modalVariants}
          initial="hidden"
          animate="visible"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
