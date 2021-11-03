import React from 'react'
import './Footer.css'
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Button } from '@mui/material';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__content"> 
                <ul>
                <div className="footer__titles">
                <h3>
                ABOUT
                </h3>
                </div>
                <li><a href="../App.js">How Airbnb works</a></li>
                <li><a href="../App.js">Newsroom</a></li>
                <li><a href="../App.js">Airbnb 2021</a></li>
                <li><a href="../App.js">Investors</a></li>
                <li><a href="../App.js">Airbnb Plus</a></li>
                <li><a href="../App.js">Airbnb Luxe</a></li>
                <li><a href="../App.js">HotelTonight</a></li>
                <li><a href="../App.js">Airbnb for Work</a></li>
                <li><a href="../App.js">Made possible by Hosts</a></li>
                <li><a href="../App.js">Careers</a></li>
                <li><a href="../App.js">Founders' Letter </a></li>
                </ul>
                <ul>
                <div className="footer__titles">
                <h3>COMMUNITY</h3>
                </div>
                <li><a href="../App.js">Diversity & Belonging</a></li>
                <li><a href="../App.js">Accessibility</a></li>
                <li><a href="../App.js">Airbnb Associates</a></li>
                <li><a href="../App.js">Host Afghan refugees</a></li>
                <li><a href="../App.js">Guest Referrals</a></li>
                <li><a href="../App.js">Airbnb.org</a></li>
                </ul>
                <ul>
                <div className="footer__titles">
                <h3>HOST</h3>
                </div>
                <li><a href="../App.js">Host your home</a></li>
                <li><a href="../App.js">Host an Online Experience</a></li>
                <li><a href="../App.js">Host an Experience</a></li>
                <li><a href="../App.js">Responsible hosting</a></li>
                <li><a href="../App.js">Resource Centre</a></li>
                <li><a href="../App.js">Community Centre</a></li>
                </ul>
                <ul>
                <div className="footer__titles">
                <h3>SUPPORT</h3>
                </div>
                <li><a href="../App.js">Our COVID-19 Response</a></li>
                <li><a href="../App.js">Help Centre</a></li>
                <li><a href="../App.js">Cancellation options</a></li>
                <li><a href="../App.js">Neighbourhood Support</a></li>
                <li><a href="../App.js">Trust & Safety</a></li>
                </ul>       
            </div>
            <div className="divider">
                <hr/>
            </div>
            <div className="footer__btm__content">
            <div className="footer__btm__left">
            <p>© 2021 Airbnb, Inc.</p>
            <ul>
                <li><a href="../App.js">Privacy</a></li>
                <li><a href="../App.js">Terms</a></li>
                <li><a href="../App.js">Sitemap</a></li>
                <li><a href="../App.js">Company details</a></li>
            </ul>
            </div>
            <div className="footer__btm__right">
                <Button>
                <LanguageIcon/>
                <span> English(IN) </span>
                </Button>
                <Button>
                    <span>
                    ₹ INR
                    </span>
                </Button>
                <a href="https://www.facebook.com/AirbnbIndia"><FacebookIcon/></a>
                <a href="https://twitter.com/airbnb_in"><TwitterIcon/></a>
                <a href="https://www.instagram.com/airbnb/"><InstagramIcon/></a>
            </div>
            </div>
        </div>
    )
}

export default Footer
