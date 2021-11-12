import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import Infocard from './Formsearch/Infocard';
import faker from 'faker'
import './Searchpage.css'

function Filter_comp(props){
return(
    <div className="filters">
        <p>{props.filter}</p>
    </div>
);
}

function Searchpage() {
    return (
        <div className="searchpage">
            <div className="searchpage__header">
            <Header />
            <div className="filter__btn">
            <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '16px', width: '16px', fill: 'currentcolor'}}><path d="M5 8c1.306 0 2.418.835 2.83 2H14v2H7.829A3.001 3.001 0 1 1 5 8zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm6-8a3 3 0 1 1-2.829 4H2V4h6.17A3.001 3.001 0 0 1 11 2zm0 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"></path></svg>
            </div>
            <div className="searchpage__filters">
              <Filter_comp filter="Price"/>
              <Filter_comp filter="Type of place"/>
              <Filter_comp filter="Free cancellation"/>
              <Filter_comp filter="Beachfront"/>
              <Filter_comp filter="Pool"/>
              <Filter_comp filter="Air conditioning"/>
              <Filter_comp filter="Wifi"/>
              <Filter_comp filter="Kitchen"/>
              <Filter_comp filter="Free parking"/>
              <Filter_comp filter="Filters"/>
            </div>
            </div>
            <main className="searchpage__main">
            <section className="main__left">
            <div className="main__left_head">
                <p>300+ stays in map area</p>
                <div className="searchpge__desc">
                <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{display: 'block', height: '24px', width: '24px', fill: 'rgb(227, 28, 95)', stroke: 'currentcolor'}}><g><g stroke="none"><path d="M26 6c9.941 0 18 8.059 18 18 0 9.136-6.806 16.682-15.624 17.845A16.393 16.393 0 0 0 32.18 35c-1.885-6.919-8.144-12-15.575-12a15.93 15.93 0 0 0-8.545 2.474C8.02 24.988 8 24.497 8 24c0-9.941 8.059-18 18-18z" fill-opacity=".2"></path><path d="M26 2c12.15 0 22 9.85 22 22s-9.85 22-22 22a22.18 22.18 0 0 1-3.228-.235c.748-.313 2.991-1.901 6.728-4.765 1.542-3.103 2.436-5.103 2.68-6-1.257-2.91-2.032-4.576-2.324-5h2.802c.22-1.892.342-3.908.342-6s-.121-4.107-.342-6H19.342a51.507 51.507 0 0 0-.333 5.015c-.001.054-1.322.007-1.999-.01.077-2.15.18-3.819.311-5.005H6.915a20.17 20.17 0 0 0-.715 8.845 16.261 16.261 0 0 0-1.727 1.712A22.06 22.06 0 0 1 4 24C4 11.85 13.85 2 26 2zm8.417 30c-.762 4.99-2.232 9.102-4.174 11.55 6.203-1.34 11.336-5.559 13.93-11.188l.162-.361h-9.918zm10.668-14H34.679c.21 1.909.321 3.922.321 6 0 2.079-.11 4.092-.321 6h10.405c.595-1.894.916-3.91.916-6s-.32-4.106-.915-6zM21.757 4.45l-.112.026C15.36 5.87 10.188 10.225 7.665 16h9.918c.762-4.99 2.232-9.101 4.174-11.55zm8.486 0l.038.05c1.923 2.453 3.379 6.543 4.136 11.5h9.919c-2.539-5.81-7.757-10.18-14.093-11.55zM26 4l-.137.004C23.236 4.168 20.74 9.044 19.62 16H32.38l-.128-.75c-1.174-6.548-3.58-11.08-6.11-11.245L26 4z"></path></g><g fill="none" stroke-width="2"><path d="M16.605 23c7.43 0 13.69 5.081 15.575 12-1.886 6.92-8.145 12-15.575 12S2.915 41.92 1.03 35c1.885-6.919 8.144-12 15.575-12z"></path><ellipse cx="16.439" cy="35.333" rx="2.939" ry="3"></ellipse></g></g></svg>
                <p>149 people are looking for a place around Goa. They searched for the same dates as you over the last week.</p>
                </div>
            </div>
            <div className="main__left__content">
                <Infocard img={faker.image.transport()} name={faker.name.firstName()} star={Math.floor((Math.random()*10)+1)} price={Math.floor((Math.random()*1000)+1)} total_nights={Math.floor((Math.random()*15)+1)}/>
                <Infocard img={faker.image.transport()} name={faker.name.firstName()} star={Math.floor((Math.random()*10)+1)} price={Math.floor((Math.random()*1000)+1)} total_nights={Math.floor((Math.random()*15)+1)}/>
                <Infocard img={faker.image.transport()} name={faker.name.firstName()} star={Math.floor((Math.random()*10)+1)} price={Math.floor((Math.random()*1000)+1)} total_nights={Math.floor((Math.random()*15)+1)}/>
                <Infocard img={faker.image.transport()} name={faker.name.firstName()} star={Math.floor((Math.random()*10)+1)} price={Math.floor((Math.random()*1000)+1)} total_nights={Math.floor((Math.random()*15)+1)}/>
                <Infocard img={faker.image.transport()} name={faker.name.firstName()} star={Math.floor((Math.random()*10)+1)} price={Math.floor((Math.random()*1000)+1)} total_nights={Math.floor((Math.random()*15)+1)}/>
            </div>
            </section>
            </main>

            <Footer/>
        </div>
    )
}

export default Searchpage
