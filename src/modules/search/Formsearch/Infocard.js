import React from 'react'
import './Infocard.css'
import faker from 'faker'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Infocard(props) {
    return (
        <div className="d-md-flex m-2 " style={{borderBottom:'1px solid rgba(235,235,235)'}}>
            <div className="image__carousel w-50 h-25 m-2 p-2">
            <div id="carouselExampleCaptions" className="carousel slide  " data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button className="rounded-circle active" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
            <button className="rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button className="rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={faker.image.nightlife()} className="d-block w-100 h-100 rounded-3" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={faker.image.people()}className="d-block w-100 h-100 rounded-3" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={faker.image.sports()} className="d-block  w-100 h-100 rounded-3" alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
            </div>
            <div className="m-1 flex-grow-1">
                <div className="d-flex p-1 m-1">
                    <div className="d-flex flex-column flex-grow-1">
                    <p className="text-secondary m-0">Private room in Anjuna</p>
                    <h3 className="fw-normal">Xavier's guest House</h3>
                    </div>
                     <FavoriteBorderIcon/>
                    </div>
                <div className="d-flex flex-column justify-content-between">
                    <p className="text-secondary flex-grow-1 m-0 p-1">2 guests. 1  bedroom.1bedroom.Wifi</p>
                    <div className="d-flex m-1 p-1 align-items-center">
                    <StarOutlineIcon/>
                    <p className="flex-grow-1 m-0 p-1">(73 reviews)</p>
                    <div className="d-flex m-1 p-1 flex-column justify-content-end">
                        <p className="d-flex m-0 align-items-center p-1"><h3 className="m-0">₹1,449</h3>/ night</p>
                        <p className="m-0 ps-5"> ₹5,449 total</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Infocard
