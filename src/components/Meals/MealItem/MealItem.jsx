import React, { useContext } from 'react'
import classes from './MealItem.module.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/cart-context'
export default function MealItem(props) {
const CartCtx=useContext(CartContext);
  const addToCartHandler=amount=>{
CartCtx.addItem({
  id:props.id,
  price:props.price,
  name:props.name,
  amount:amount
});
  }

  return (
    <li className={classes.meal}>
        <div><h3>{props.name}</h3>
        
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>${props.price.toFixed(2)}</div>
        </div>
        <div>
          <MealItemForm id={props.id} addToCart={addToCartHandler}/>
        </div>
    </li>
  )
}
