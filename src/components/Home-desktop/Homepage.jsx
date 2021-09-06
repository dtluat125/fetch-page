import React from 'react'
import "../../assets/css/homepage.css"
import AboutFetch from './About Fetch/AboutFetch'
import Feedbacks from './Feedback/Feedbacks'
import Header from '../Header/Header'
import HomepageHeader from './Homepage Header/HomepageHeader'
import Talents from './Talents/Talents'
import TrustedCus from './Trusted Cus/TrustedCus'
import USP1 from './USP/USP1'
import USP2 from './USP/USP2'
import Footer from '../Footer/Footer'
function Homepage() {
    return (
        <div className="homepage">
            <Header></Header>
            <HomepageHeader/>
            <TrustedCus/>
            <USP1/>
            <USP2/>
            <Talents/>
            <Feedbacks/>
            <AboutFetch/>
            <TrustedCus 
            signUp = {true}
            />
            <Footer/>
        </div>
    )
}

export default Homepage
