import React from 'react'
import './Discover.css'
import faker from 'faker'
import Discovercard from './discover/Discovercard'

function Discover() {
    return (
        <div className="discover">
            <div className="discover__header">
             <div className="discover__header__title">
                <h2>
                Discover things to do
                </h2>
             </div>
            </div>
            <div className="discover_content">
            <div className="discover__section">
            <Discovercard src={faker.image.sports()} title={faker.address.country()} desc={faker.address.direction()}/>
            <Discovercard src={faker.image.sports()} title={faker.address.country()} desc={faker.address.direction()}/>
            <Discovercard src={faker.image.sports()} title={faker.address.country()} desc={faker.address.direction()}/>
            </div>
            </div>
        </div>
    )
}

export default Discover
