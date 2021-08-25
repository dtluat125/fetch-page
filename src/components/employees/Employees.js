import React from 'react';
import './Employees.scss';
import Group5169011 from '../../assets/img/Group 5169011.png';
import Group5169010 from '../../assets/img/Group 5169010.png';
import Group5169009 from '../../assets/img/Group 5169009.png';
import FrameUsp from '../../assets/img/FrameUsp.png';
import tick15 from '../../assets/img/tick15.svg';
import uspBLbanner from '../../assets/img/b37b150acf507dc5917ea93a18f01019 1.png'
import avt1 from '../../assets/img/avt1.png';
import avt2 from '../../assets/img/avt2.png';

const Employees = () => {
    return (
        <div className="employees">
            <section className="employees-header">
                <div className="container">
                    <div className="row">
                        <div className="col-6 reach-further">
                            <h1>Reach further with fetch</h1>
                            <p>No longer is hiring and managing offshore staff daunting. With Fetch, you get to build your remote dream team effortlessly while we handle the paperwork!</p>
                            <button className="btn-join-our-team">Join Our Team</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="employees-how-it-work">
                <div className="container">
                    <div className="employees-how-it-work-header">
                        <h1>How it works</h1>
                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market</p>
                    </div>
                    <div className="row row-icon-3">
                        <div className="col-3">
                            <div>
                                <img src={Group5169011} alt="English Proficiency" />
                            </div>
                            <p className="icon-title" >English Proficiency</p>
                            <p className="icon-content">Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                        </div>
                        <div className="col-3">
                            <div>
                                <img src={Group5169010} alt="Coding Challenge" />
                            </div>
                            <p className="icon-title">Coding Challenge</p>
                            <p className="icon-content">Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                        
                        </div>
                        <div className="col-3">
                            <div>
                                <img src={Group5169009} alt="Coding Challenge" />
                            </div>
                            <p className="icon-title">Technical Interview</p>
                            <p className="icon-content">Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                        
                        </div>
                    </div>
                </div>
            </section>
            <section className="employees-usp">
                <div className="container-fluid px-0">
                    <div className="row g-0 row-top">
                        <div className="col-6 usp-col-top-left">
                            <div className="col-6-wrap">
                                <h1>Global Exposure working with foreign companies</h1>
                                <div className="achieve-item">
                                    <div className="check-icon-wrap">
                                        <img className="check-icon" src={tick15} alt="tick-icon"/>
                                    
                                    </div>
                                    <div>
                                        <h3>We’re Experienced</h3>
                                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                                    </div>
                                </div>
                                <div className="achieve-item">
                                    <div className="check-icon-wrap">
                                        <img className="check-icon" src={tick15} alt="tick-icon"/>
                                    </div>
                                    <div>
                                        <h3>We’re Experienced</h3>
                                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 usp-col-top-right">
                            <div className="col-6-wrap">
                                <img src={FrameUsp} alt="FrameUsp" />
                            </div>
                        </div>
                    </div>
                    <div className="row g-0 row-bottom">
                        <div className="col-6 usp-col-bt-left">
                            <div className="col-6-wrap">
                                <img src={uspBLbanner} alt="" />
                            </div>
                        </div>
                        <div className="col-6 usp-col-bt-right">
                            <div className="row row-cus">
                                <div className="col-2"></div>
                                <div className="col-10">
                                    <div className="col-10-wrap">
                                        <h1>Fetch and it’s amazing benefits and perks</h1>
                                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                                        <ul>
                                            <li>
                                                <span>
                                                    <img src={tick15} alt="tick-bg" />
                                                </span>
                                                <p>13 Month Bonus</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={tick15} alt="tick-bg" />
                                                </span>
                                                <p>Monthly company retreat</p>
                                            </li>
                                            <li>
                                                <span>
                                                    <img src={tick15} alt="tick-bg" />
                                                </span>
                                                <p>Daily lunches provided</p>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="employees-member">
                <div className="container">
                    <div className="row justify-content-center first-row">
                        <div className="col-6">
                            <h1>500+</h1>
                            <h2>Members of the Fetch family</h2>
                            <p>No longer is hiring and managing offshore staff daunting. With Fetch, you get to build your remote dream team effortlessly while we handle the paperwork!</p>
                        </div>
                    </div>
                    <div className="row second-row">
                        <div className="col-6">
                            <div className="cmt-wrap">
                                <img src={avt1} alt="avt"/>
                                <div className="cmt">
                                    <p>I did not have a college degree, or any experience in tech, but i had decades of customer focus from working in retail. I had real-world business experience. And I was fairly technicial for somone who didn’t work in tech.”</p>
                                    <p className="signal">
                                        David Edelson,<br/>
                                        Front-End Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="cmt-wrap">
                                <img src={avt2} alt="avt"/>
                                <div className="cmt">
                                    <p>I feel grateful that fetch advocated for me to expand my horizons and strive to achieve more, not only in my career but in education as well.</p>
                                    <p className="signal">
                                        Alison Harrington,<br/>
                                        Ruby On Rails Developer
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center third-row">
                        <div className="col-10">
                            <div className="view-role-wrap">
                                <div className="wrap-text">
                                    <h2>At fetch, we are family</h2>
                                    <p>No longer is hiring and managing offshore staff daunting. With Fetch, you get to build your remote dream team effortlessly while we handle the paperwork!</p>
                                </div>
                                <div className="wrap-btn">
                                    <button>View Roles</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="employees-join">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-10 col-text">
                            <h2>Join Our Team Now!</h2>
                            <p>Be part of our growing network of satisfied partners</p>
                        </div>
                        <div className="col-2 col-btn">
                            <div className="btn-wrap">
                                <button>Join Our Team</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section style={{marginTop: '80px'}}>footer</section>
        </div>
    )
}

export default Employees
