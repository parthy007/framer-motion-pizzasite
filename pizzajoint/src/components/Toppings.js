import React from 'react';
import { Link } from 'react-router-dom';
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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['mushrooms', 'peppers', 'onions', 'olives', 'extra cheese', 'tomatoes'];

  return (
    <motion.div className="toppings container"
      variants={containerVariant}
      initial='hidden'
      animate='visible'
    >
      
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{type: 'spring',stiffness: 300, scale: 1.3, color: '#f8e112', originX:0}}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          whileHover={{
            scale:1.1,
            textShadow: "0px 0px 8px rgb(255,255,255)",
            boxShadow: "0px 0px 8px rgb(255,255,255)",
          }}
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;