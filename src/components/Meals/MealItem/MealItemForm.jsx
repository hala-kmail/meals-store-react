import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from './MealItemForm.module.css'
export default function MealItemForm(props) {
  const amountInputRef=useRef()
const [amountIsValid,setAmountIsValid]=useState(true);



  const SubmitHandler=event=>{
event.preventDefault();
const enterdAmount=amountInputRef.current.value;
const enterdAmountNumber=+enterdAmount;
if(enterdAmount.trim().length===0||enterdAmountNumber<1||enterdAmountNumber>5){
  setAmountIsValid(false);
  return;
}
props.addToCart(enterdAmountNumber);
  }
  return (
    <form className={classes.form} onSubmit={SubmitHandler}> 
<Input ref={amountInputRef}
label="Amount" input={{
    id:'amount_'+props.id,
    type:'number',
    min:'1',
    max:'5',
    step:'1',
    defaultValue:'1'

}}/>
<button>+Add</button>
{!amountIsValid&&<p>please enter amount (1-5)</p>}

    </form>
  )
}
