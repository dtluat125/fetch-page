import React from 'react';
import '../../assets/scss/Story.scss';
import bookIcon from '../../assets/img/bookIcon.png';
import storyIcon1 from '../../assets/img/storyIcon1.png';
import storyIcon2 from '../../assets/img/storyIcon2.png';
import storyIcon3 from '../../assets/img/storyIcon3.png';
import storyIcon4 from '../../assets/img/storyIcon4.png';
import { Row, Col } from 'antd';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import AnimationWrap from '../animation/AnimationWrap';

const storyData = [
    {id: 1, icon: storyIcon1, content: "Launched in 2014, Fetch begins operations in Ho Chi Minh City with just 12 staff."},
    {id: 2, icon: storyIcon2, content: "In just two years, Fetch has expanded and increased its headcount to 80, now extending its service to the public, providing tech talents to businesses."},
    {id: 3, icon: storyIcon3, content: "As of 2021, Fetch has over 150 employees across offices in Ho Chi Minh City and Hanoi. Its range of services has also since grown to cater to a spectrum of clients with more dynamic needs."},
    {id: 4, icon: storyIcon4, content: "Fetch aims to make hiring in the tech world boundless – connecting both clients and tech talents on a global scale."},
    
];

const Story = () => {
    return (
        <div className="story">
            <Header />
            <section className="story-intro">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]} justify="center">
                        <Col xs={24} sm={20} md={18} lg={12}>
                            <div className="wrap-icon">
                                <img src={bookIcon} alt="book icon" />
                            </div>
                            <AnimationWrap
                                ratio={0.4} 
                                render={(ref, animate) => 
                                    <h1 
                                        ref={ref} 
                                        className={animate && "animate__animated animate__bounceIn"}
                                    >
                                        Making the tech world more accessible since 2014.
                                    </h1>
                                }
                            />
                            <AnimationWrap 
                                render={(ref, animate) => 
                                    <h6
                                        ref={ref} 
                                        className={animate && "animate__animated animate__pulse"}
                                    >
                                        Grown from humble roots to becoming one of the leaders of our industry in less than a decade, Fetch is now synonymous with the tech world and the best it can offer.
                                    </h6>
                                }
                            />
                        </Col>
                    </Row>
                </div>
                <div className="v-line-tree-top"></div>
            </section>
            <section className="story-tree">
                <div className="cus-container">
                    <Row className="tree-row-top" gutter={{ xs: 21, sm: 24, xl: 30 }} justify="center">
                        <Col xs={24} sm={24} xl={24}>
                            <div className="wrap-title-tree"><span>Our history</span></div>
                        </Col>
                        <Col xs={24} sm={20} md={{span: 8}}>
                            <AnimationWrap 
                                render={(ref, animate) => 
                                    <StoryCard
                                        refCard={ref}  
                                        className={`card-top-left animate__animated ${animate && "animate__fadeInLeftBig"}`} 
                                        icon={storyData[0].icon} 
                                        content={storyData[0].content}
                                    />
                                }
                            />
                        </Col>
                        <Col xs={0} sm={0} md={2}>
                            <div className="leave-left"></div>
                        </Col>
                        <Col xs={0} sm={0} md={2}>
                            <div className="leave-right"></div>
                        </Col>
                        <Col xs={24} sm={20} md={{span: 8, }}>
                            <AnimationWrap 
                                render={(ref, animate) => 
                                    <StoryCard
                                        refCard={ref}  
                                        className={`card-top-right animate__animated ${animate && "animate__fadeInRightBig"}`} 
                                        icon={storyData[1].icon} 
                                        content={storyData[1].content}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                    <Row className="tree-row-bottom" gutter={{ xs: 21, sm: 24, xl: 30 }} justify="center">
                        <Col xs={24} xl={24}>
                            <div className="wrap-title-tree"><span>Our future</span></div>
                        </Col>
                        <Col xs={24} sm={20} md={{span: 8}}>
                            <AnimationWrap 
                                render={(ref, animate) => 
                                    <StoryCard
                                        refCard={ref}  
                                        className={`card-btm-left animate__animated ${animate && "animate__fadeInLeftBig"}`} 
                                        icon={storyData[2].icon} 
                                        content={storyData[2].content}
                                    />
                                }
                            />
                        </Col>
                        <Col xs={0} sm={0} md={2}>
                            <div className="leave-left"></div>
                        </Col>
                        <Col xs={0} sm={0} md={2}>
                            <div className="leave-right"></div>
                        </Col>
                        <Col xs={24} sm={20} md={{span: 8}} >
                            <AnimationWrap 
                                render={(ref, animate) => 
                                    <StoryCard
                                        refCard={ref}  
                                        className={`card-btm-right animate__animated ${animate && "animate__fadeInRightBig"}`} 
                                        icon={storyData[3].icon} 
                                        content={storyData[3].content}
                                    />
                                }
                            />
                        </Col>
                    </Row>
                </div>
                <div className="v-line-tree-btm"></div>
            </section>
            <section className="story-close">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]} justify="center">
                        <Col xs={24} sm={20} >
                            <div className="close-wrap">
                                <h2>Creating stronger communities for our team</h2>
                                <h6>Our employees are the reason for our success. At Fetch, we prioritise our staffs' welfare and take pride in creating a pleasant and healthy work environment for everyone.</h6>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Story;

const StoryCard = ({className, icon, content, refCard}) => {
    return (
        <div ref={refCard} className={`card-story ${className}`}>
            <div className="wrap-icon">
                <img src={icon} alt="icon card" />
            </div>
            <p>{content}</p>
        </div>

    )
}
