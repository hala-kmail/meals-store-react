import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState={
    items:[],
    totalAmount:0
}

const CartReducer=(state,action)=>{
    if(action.type=='ADD'){
        
        const ubdatedTotalAmount=state.totalAmount+action.item.price * action.item.amount;
        const existeItemCartIndex=state.items.findIndex(item=>item.id===action.item.id);
        const existingItem=state.items[existeItemCartIndex];
        let updatedItem;
        let updatedItems;
        if (existingItem){
updatedItem={
    ...existingItem,
    amount:existingItem.amount+action.item.amount
}
updatedItems=[...state.items];
updatedItems[existeItemCartIndex]=updatedItem;
        }else{
            updatedItems=state.items.concat(action.item);
        }
        
        return{
            items:updatedItems,
            totalAmount:ubdatedTotalAmount
        }
    }
    if(action.type==='REMOVE'){
        const existeItemCartIndex=state.items.findIndex(item=>item.id===action.id);
        const existingItem=state.items[existeItemCartIndex];
        const updatedTotalAmount=state.totalAmount-existingItem.price;
        let updatedItems;
        if(existingItem.amount==1){
            updatedItems=state.items.filter(item=>item.id !==action.id)
        }
        else{
            const updatedItem={...existingItem,amount:existingItem.amount-1};
            updatedItems=[...state.items];
            updatedItems[existeItemCartIndex]=updatedItem;
        }
        return{
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultCartState;
};


export default function CartProvider(props) {
  const [CartState,dispatchCartAction]=  useReducer(CartReducer,defaultCartState);


const AddItemToCartHandler=item=>{
    dispatchCartAction({type:'ADD',item:item})
};


const RemoveItemFromCartHandler=id=>{
    dispatchCartAction({type:'REMOVE',id:id})
};


    const cartContext={
        items:CartState.items,
        totalAmount:CartState.totalAmount,
        addItem:AddItemToCartHandler,
        removeItem:RemoveItemFromCartHandler}



  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}
