import React, { useState } from 'react'
import '../css/popupwindow.css';
import '../css/cart.css';

const Popupwindow = () => {

    const [popup, setpopup] = useState(false);

    const openPopUp = () =>{
        setpopup(true);
        console.log('opened');
    }

    const closePopUp = () =>{
        setpopup(false);
        console.log('closed');
    }


  return (
    <div>
        <button onClick={openPopUp}>click me</button>

        <div className={'popwindow ' + (popup ? 'open-window' :'')}>
            <p>Are you Sure to Remove Item for Cart</p>
            <button className='btn cancel-button' onClick={closePopUp} >Cancel</button>
            <button className='btn btn-danger cart-button' onClick={closePopUp} >Remove</button>
        </div>
    </div>
  )
}

export default Popupwindow;
