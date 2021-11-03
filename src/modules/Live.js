import React from 'react'
import './Live.css'
import faker from 'faker'
import Livecard from './Live/Livecard'

function Live() {
    return (
        <div className="live">
            <div className="live__header">
            <div className="live__head__title">
            <h2>
            Live anywhere
            </h2>
            </div>
            </div>
            <div className="live__content">
                <div className="live__section">
                    <Livecard src={faker.image.transport(250,250)} desc={faker.name.jobTitle()}/>
                    <Livecard src={faker.image.nightlife(250,250)} desc={faker.name.jobTitle()}/>
                    <Livecard src={faker.image.nightlife(250,250)} desc={faker.name.jobTitle()}/>
                    <Livecard src={faker.image.nightlife(250,250)} desc={faker.name.jobTitle()}/>
                </div>
            </div>
        </div>
    )
}

export default Live
