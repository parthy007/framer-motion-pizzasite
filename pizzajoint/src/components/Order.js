import React from "react";
import { motion } from "framer-motion";

const containerVariant = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      mass: 0.4, // more mass it moves slower
      damping: 8, // higher no. means less oscillations
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const childrenVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childrenVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childrenVariant}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
