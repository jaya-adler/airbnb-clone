import React, {useState } from 'react'
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
import User_logout_Comp from './userProfile/User_logut';
import User_login_Comp from './userProfile/userlogin';

// import { useRouteMatch } from 'react-router';

function Header() {
    
    const [searchclick,setSearchclick] = useState(false);
    const [userLogged,setuserlogged] = useState(true);
    const [userOption,setuserOption] = useState(false);
    var host="Become a host"
    const user_logout_comp = (
        <div style={{minHeight:'30vh',maxHeight:'40vh',overflowY:'scroll',height:'fit-content'}} className="p-1 mx-2 w-25 bg-white text-dark end-0 border border rounded-3 position-absolute shadow-lg text-start x-3">
            <User_logout_Comp/>
        </div>
        );
    const user_login_comp = (
        <div style={{ minHeight:'30vh',maxHeight:'40vh',overflowY:'scroll',height:'fit-content'}} className="p-1 mx-2 w-25 bg-white text-dark end-0 border border rounded-3 position-absolute shadow-lg text-start x-3">
            <User_login_Comp/>
        </div>
    );
    const history = useHistory();
    function handleclick() {
        history.push('/');
    }
    function handleuserlogin(){
        setuserOption(!userOption)
        host="Switch to hosting"
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
                <Button onClick={(e) => setSearchclick(!searchclick)} > 
                <div className="search"><span>Where are you going?</span></div>
                <SearchIcon />
                </Button>
             </div>
            </div>
            {/* <SimpleGrow /> */}
        <div className="header__right">
        <p className="mb-0">{host}</p>
        <LanguageIcon/>
        <button onClick={handleuserlogin} className="profile">
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
            <div >
            {userLogged && userOption && user_login_comp }
            {!userLogged && userOption && user_logout_comp}
            </div>
        </div>
    )
}

export default Header
