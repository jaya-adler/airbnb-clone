import React, { useState } from 'react'
import './Header.css'
import React_logo from './airbnb.svg'
import SearchIcon from '../../node_modules/@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SimpleGrow from './search/Formsearch/grow'
import { Button } from '@mui/material';
import Locationsearch from './search/Formsearch/Locationsearch';
import Checkins from './search/Formsearch/Checkinout';
import SimpleFade from './search/Formsearch/guestpage';
import { useHistory } from 'react-router';
// import { useRouteMatch } from 'react-router';

function Header() {
    const [searchclick,setSearchclick] = useState(false);
    const history = useHistory();
    function handleclick() {
        history.push('/');
    }
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',position:'sticky',width:'100%'}}>
            <div className="header">
            <div>
            <img  onClick={handleclick} className="header__icon"
             src={React_logo}
             alt="logo"
             />
            </div>
            <div>
            <div className="header__center__res">
            <Button onClick={(e) => setSearchclick(!searchclick)}>
            <SearchIcon />
            </Button>
             </div>
            <div className="header__center">
                <Button onClick={(e) => setSearchclick(!searchclick)} variant="outlined"> 
                <div className="search"><span>Where are you going?</span></div>
                <SearchIcon />
                </Button>
             </div>
            </div>
            {/* <SimpleGrow /> */}
            <div className="header__right">
                <p className="mb-0">Become a host</p>
                <LanguageIcon/>
                <button className="profile">
                <MenuIcon/>
                <AccountCircleIcon/>
                </button>
            </div>
            </div>
                {searchclick && (<div className="search__form">
                    <Locationsearch />
                    <Checkins />
                    <SimpleFade />
                </div>)}
        </div>
    )
}

export default Header
