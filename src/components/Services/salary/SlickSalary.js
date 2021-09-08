import React from 'react';
import { Carousel, Divider } from 'antd';
import cardAvt1 from '../../../assets/img/cardAvt1.png';
import checkIcon from '../../../assets/img/CheckIcon.png';
import '../../../assets/scss/SlickSalary.scss';
import {ReactComponent as IconArrowRight } from '../../../assets/img/iconArrowRight.svg';

const SlickSalary = () => {
    const settings = {
        className: "slick-salary",
        infinite: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    centerMode: true,
                    autoplay: true,
                    autoplaySpeed: 700,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    autoplay: false,
                }
            },
        ]
    };

    return (
        <Carousel {...settings}>
            <SlickCard />
            <SlickCard />
            <SlickCard />
            <SlickCard />
            <SlickCard />
        </Carousel>
    )
}

const SlickCard = () => {
    return (
        <div className="slick-card">
            <div className="card-headder">
                <img src={cardAvt1} alt="user avt"/>
                <div className="user-info">
                    <h5>Aleksandar Nikolic</h5>
                    <h6>Freelance Developer</h6>
                    <h6>Hanoi, Vietnam</h6>
                </div>
            </div>
            <p className="description">Change the color to match your brand or vision, add your logo, choose the perfect thumbnail, remove the playbar,</p>
            <Divider className="divider-under-des"/>
            <div className="features">
                <h6>Feature one</h6>
                <ul>
                    <li>
                        <span>
                            <img src={checkIcon} alt="check icon"/>
                        </span>
                        <p>Showcase and embed your work</p>
                    </li>
                    <li>
                        <span>
                            <img src={checkIcon} alt="check icon"/>
                        </span>
                        <p>Publish across social channels</p>
                    </li>
                </ul>
            </div>
            <button className="btn-interest">I’m interested</button>
            <button className="btn-see-profile">
                <span className="see">See full profile</span>
                <IconArrowRight />
            </button>
        </div>
    )
}

export default SlickSalary
