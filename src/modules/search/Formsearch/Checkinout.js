import React from 'react'
import './Checkinout.css'
import MinMaxDateRangePicker from './Daterangepicker'

function Checkins() {
    return (
        <div className="checkinout">
            <div className="checkinout__picker">
                <MinMaxDateRangePicker />
            </div>
        </div>
    )
}

export default Checkins
