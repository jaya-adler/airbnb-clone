import React, { useState } from 'react'
import './Locationsearch.css'


function Locationsearch() {

    const [locationname,setLocname]=useState('');
    const handleclick = ()=>{
        // console.log("clicked");
    }
    
    return (
        <div className="locationinput" onClick={handleclick}>
        <div className="location__btn" >
            <div className="location__header">
                <h3>Location</h3>
            </div>
            <div className="location__inputtxt">
            <input value={locationname} onChange={(e) => setLocname(e.target.value)} placeholder="Where are you going?"></input>
            </div>
        </div>
        </div>
    ) 
}

export default Locationsearch
