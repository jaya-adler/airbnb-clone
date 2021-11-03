import React from 'react'
import Guestform_comp from './guestform_comp'
import './guestform.css'
function guestform() {
    return (
        <div className="guestform">
            <Guestform_comp maturity="Adults" desc="Ages 13 or Above"/>
            <Guestform_comp maturity="Children" desc="Ages 2-12"/>
            <Guestform_comp maturity="Infants" desc="Under 2"/>
        </div>
    )
}

export default guestform
