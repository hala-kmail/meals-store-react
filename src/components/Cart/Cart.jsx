import React, { useContext } from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem';
export default function Cart(props) {
  const Cartctx=useContext(CartContext);
  const totalAmount=Cartctx.totalAmount;
  const hasItems=Cartctx.items.length>0;
  
  const cartItemRemoveHandler=id=>{
Cartctx.removeItem(id);
  }
  const cartItemAddHandler=item=>{
Cartctx.addItem({...item,amount:1});
  }
    const cartitems=<ul className={classes['cart-items']}>{Cartctx.items.map((item)=>
    <CartItem key={item.id}
     name={item.name}
      amount={item.amount}
       price={item.price} 
       onRemove={cartItemRemoveHandler.bind(null,item.id)}
       onAdd={cartItemAddHandler.bind(null,item)}/>)}</ul>
  return (
    <Modal onClose={props.onHideCart}>
        {cartitems}
        <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount.toFixed(2)}</span>
        </div>
        
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onHideCart}>close</button>
        {hasItems&&<button className={classes.button}>order</button>}
        </div></Modal>
  )
}
