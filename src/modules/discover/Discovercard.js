import React from 'react'
import './Discovercard.css'
function Discovercard(props) {
    return (
        <div className="discovercard"> 
            <div className="discover__detail">
            <img src={props.src} alt="" height="360" width="360"></img>
            <h4>{props.title}</h4>
            <p>{props.desc}</p>
            </div>
        </div>
    )
}

export default Discovercard
