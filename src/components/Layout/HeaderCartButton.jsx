import React, { useContext } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'
export default function HeaderCartButton(props) {
  const CartCtx=useContext(CartContext);
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}><CartIcon/></span>
       
        <span >Your Cart </span>
        <span className={classes.badge}>{CartCtx.items.reduce((allitems,i)=>{
          return allitems+ i.amount;
        },0)}</span>
        
        </button>
  )
}
