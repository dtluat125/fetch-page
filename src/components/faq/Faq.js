import React from 'react';
import '../../assets/scss/Faq.scss';
import { Row, Col } from 'antd';
import {ReactComponent as SearchIcon} from '../../assets/img/icon-search.svg';
import Help from './help/Help';
import HelpDetail from './help/HelpDetail';
import { Switch, Route } from 'react-router-dom';


const Faq = () => {
    return (
        <div className="faq">
            <header className="faq-header">
                <div className="cus-container">
                    <Row justify="center" className="row-search" gutter={[{ xs: 21, sm: 16, md: 24, xl: 30 }, { xs: 21, sm: 16, md: 24, xl: 30 }]}>
                        <Col span={24}>
                            header
                        </Col>
                        <Col xs={24} sm={24} lg={20}>
                            <h1>Fetch Help Center</h1>
                            <p>Be part of our growing network of satisfied partners</p>
                            <div className="search-input-wrap">
                                <span className="icon-wrap">
                                    <SearchIcon />
                                </span>
                                <input type="text" placeholder="Search for articles and questions" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
            <section className="faq-body">
                <div className="cus-container">
                    <Row className="row-body" gutter={[{ xs: 21, sm: 16, md: 24, xl: 30 }, { xs: 21, sm: 16, md: 24, xl: 30 }]} justify="center">
                        <Col xs={24} sm={24} lg={20}>
                            <Switch>
                                <Route exact path="/faq" component={Help} />
                                <Route path='/faq/:level1' >
                                    <HelpDetail />
                                </Route>
                            </Switch>
                        </Col>
                    </Row>
                </div>
            </section>
            <section>Footer waiting</section>
            
        </div>
    )
}

export default Faq
