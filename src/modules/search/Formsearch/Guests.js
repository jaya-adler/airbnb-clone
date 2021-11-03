import React from 'react'
import './Guests.css'
import SearchIcon from '../../../../node_modules/@mui/icons-material/Search';
import { useHistory } from 'react-router';
function Guests() {
    const nextp = useHistory();
    function searchdata(){
        nextp.push('/searchpage')
    }

    return (
        <div className="guests">
            <div className="guest__btn" >
            <div className="guest__left">
                <h4>Guests</h4>
                <p>Add guests</p>
            </div>
            <div className="guest__right">
            <div className="search__btn">
                <button onClick={searchdata}><SearchIcon/> <span>Search</span></button>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Guests
