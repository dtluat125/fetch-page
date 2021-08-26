import React from 'react';
import './Help.scss';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import {ReactComponent as ArrowLeft} from '../../../assets/img/arrowLeft.svg';

const Help = () => {
    return (
        <div className="help">
            <Row gutter={30} align="middle">
                <Col className="col-10-2">
                    <div className="icon-wrap">
                        icon
                    </div>
                </Col>
                <Col className="col-10-5">
                    <div className="content-wrap">
                        <h3>Introduction to Fetch Technology</h3>
                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                    </div>
                </Col>
                <Col className="col-10-3">
                    <div className="btn-wrap">
                        <button>
                            65 Articles
                            <span>
                                <ArrowLeft />
                            </span>
                        </button>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Help
