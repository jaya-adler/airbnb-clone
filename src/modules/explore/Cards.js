import React from 'react'
import './Cards.css'

function Cards(props) {
    return (
        <div className="cards">
         <div className="places">
            <img src={props.src} alt="" width="70" height="70"></img>
            <div className="places__content">
                <h3>{props.city_name}</h3>
                <p>{props.drive_time}</p>
            </div>

            </div>        
        </div>
    )
}

export default Cards
