import React from 'react'
import './Livecard.css'
function Livecard(props) {
    return (
        <div className="livecard">
            <div className="live__detail">
            <img src={props.src} alt=""></img>
            <h4>{props.desc}</h4>
            </div>
        </div>
    )
}

export default Livecard
