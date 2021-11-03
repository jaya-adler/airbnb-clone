import React from 'react'
import Banner from './banner'
import Explore from './Explore'
import Flexible from './flexible'
import Live from './Live'
import './Home.css'
import Discover from './Discover'
import Header from './Header'
import Footer from './Footer'






function Home() {
    return (
        <div className="home">
            <Header/>
            <Flexible/>
            <Explore/>
            <Live/>
            <Banner/>
            <Discover/> 
            <Footer/>

        </div>
    )
}

export default Home
