import React from 'react'
import './Explore.css'
import Cards from './explore/Cards'
import faker from 'faker'

function Explore() {
    return (
        <div className="explore">
            <div className="explore__header">
             <div className="exp__header__title">
                <h2>
                Explore nearby
                </h2>
             </div>
            </div>
            <div className="explore_content">
                <div className="explore__section">
                    <Cards src={faker.image.city()} city_name={faker.address.cityName()} drive_time={`${faker.random.number(30)}-minute drive`}/>
                    <Cards src={faker.image.city()} city_name={faker.address.cityName()} drive_time={`${faker.random.number(30)}-minute drive`}/>
                    <Cards src={faker.image.city()} city_name={faker.address.cityName()} drive_time={`${faker.random.number(30)}-minute drive`}/>
                    <Cards src={faker.image.city()} city_name={faker.address.cityName()} drive_time={`${faker.random.number(30)}-minute drive`}/>
                </div>
                <div className="explore__section">
                    <Cards src={faker.image.city(70,70)} city_name={faker.address.cityName()} drive_time={`${faker.random.number(30)}-minute drive`}/>
                    <Cards src={faker.image.city(70,70)} city_name={faker.address.cityName()} drive_time={`${faker.random.number(30)}-minute drive`}/>
                    <Cards src={faker.image.city(70,70)} city_name={faker.address.cityName()} drive_time={`${faker.random.number(30)}-minute drive`}/>
                    <Cards src={faker.image.city(70,70)} city_name={faker.address.cityName()} drive_time={`${faker.random.number(30)}-minute drive`}/>
                </div>
            </div>
        </div>
    )
}

export default Explore
