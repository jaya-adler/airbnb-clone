import React from 'react'
import './Infocard.css'
import faker from 'faker'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
function Infocard(props) {
    return (
        <div className="d-lg-flex m-2 " style={{borderBottom:'1px solid rgba(235,235,235)'}}>
            <div className="image__carousel  container-md h-25 m-2 p-2">
            <div id="carouselExampleCaptions" className="carousel slide  " data-bs-ride="carousel">
            <div className="carousel-indicators">
            <button className="rounded-circle active" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" aria-current="true" aria-label="Slide 1"></button>
            <button className="rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button className="rounded-circle" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={props.img} className="d-block w-100 h-100 rounded-3" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={props.img}className="d-block w-100 h-100 rounded-3" alt="..."/>
            </div>
            <div className="carousel-item">
              <img src={props.img} className="d-block  w-100 h-100 rounded-3" alt="..."/>
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
            <div className=" container-md m-1 flex-grow-1">
                <div className="d-flex p-1 m-1">
                    <div className="d-flex flex-column flex-grow-1">
                    <p className="text-secondary fs-medium">Private room in Anjuna</p>
                    <h3 className="fw-normal fs-medium">{props.name}'s house</h3>
                    </div>
                     <FavoriteBorderIcon/>
                    </div>
                <div className="d-flex flex-column justify-content-between">
                    <p className="text-secondary fs-medium flex-grow-1 m-0 p-1">2 guests. 1  bedroom.1bedroom.Wifi</p>
                    <div className="d-flex fs-medium m-1 p-1 align-items-center">
                    <StarOutlineIcon/>
                    <p className="flex-grow-1 m-0 p-1">({props.star} reviews)</p>
                    <div className="d-flex m-1 p-1 flex-column justify-content-end">
                        <p className="d-flex m-0 align-items-center p-1"><h3 className="m-0">{props.price}</h3>/ night</p>
                        <p className="m-0 "> {props.price*props.total_nights}  total</p>
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Infocard
