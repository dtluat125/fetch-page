import React from 'react';
import './Faq.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import {ReactComponent as SearchIcon} from '../../assets/img/icon-search.svg';
import Help from './help/Help';
import HelpDetail from './help/HelpDetail';

const Faq = () => {
    return (
        <div className="faq">
            <header className="faq-header">
                <div className="cus-container">
                    <Row justify="center" className="row-search" gutter={30}>
                        <Col span={20}>
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
                    <Row className="row-body" gutter={30} justify="center">
                        <Col span={20}>
                            <Help />
                            <HelpDetail />
                        </Col>
                    </Row>
                </div>
            </section>
            
        </div>
    )
}

export default Faq
