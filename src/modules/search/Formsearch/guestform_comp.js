import React, { useState } from 'react'
import './guestform_comp.css'


function guestform_comp(props) {
    //  const [guests,setGuests] = useState(0);
    return (
        <div className="guest_container">
            <div className="guest__maturity">
                <div className="guest__left">
                    <h3>{props.maturity}</h3>
                    <p>{props.desc}</p>
                </div>
                <div className="guest__right">
                    <button ><h3>-</h3></button>
                    <p>0</p>
                    <button><h3>+</h3></button>
                </div>
            </div>
        </div>
    )
}

export default guestform_comp
