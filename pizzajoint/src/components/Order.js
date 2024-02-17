import React from 'react';
import {motion} from "framer-motion"

const containerVariant = {
  hidden:{
    x:'100vw'
  },
  visible:{
    x:0,
    transition:{
      delay:0.3,
      type:'spring',
      stiffness:120
    }
  }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariant}
      initial='hidden'
      animate='visible'
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
    </motion.div>
  )
}

export default Order;