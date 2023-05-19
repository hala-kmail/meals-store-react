import React, { Fragment } from 'react'
import classes from './Modal.module.css'
import  ReactDOM  from 'react-dom'

 function Backdrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClick}/>
  )
}


 function ModalOverlay(props) {
  return (
    <div className={classes.modal}><div className={classes.content}>{props.children}</div></div>
  )
}




export default function Modal(props) {
  return (
   <Fragment>
   {ReactDOM.createPortal(<Backdrop onClick={props.onClose}/>,document.getElementById('overlayes'))}
   {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,document.getElementById('overlayes'))}
   </Fragment>
  )
}
