import React from 'react';
import '../../../assets/scss/Help.scss';
import { Row, Col } from 'antd';
import {ReactComponent as ArrowLeft} from '../../../assets/img/arrowLeft.svg';
import HelpIcon from '../../../assets/img/Group 5169047.png';
import { Link, useRouteMatch } from 'react-router-dom';

const Help = ({ disableBtn }) => {
    const {url} = useRouteMatch();

    return (
        <div className="help">
            <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, { xs: 21, sm: 24, xl: 30 }]} align="middle">
                <Col className="col-10-2">
                    <div className="icon-wrap">
                        <img src={HelpIcon} alt="icon help" />
                    </div>
                </Col>
                <Col className="col-10-5">
                    <div className="content-wrap">
                        <Link to={`${url}/Introduction to Fetch Technology`}>
                            <h3>Introduction to Fetch Technology</h3>
                        </Link>
                        <p>Being one of the first in the industry has allowed us to gain a strong grasp of the Vietnamese market.</p>
                    </div>
                </Col>
                <Col 
                    className="col-10-3" 
                    style={disableBtn && {display: 'none'}}
                >
                    <div className="btn-wrap">
                        <Link to={`${url}/Introduction to Fetch Technology`}>
                            <button>
                                65 Articles
                                <span>
                                    <ArrowLeft />
                                </span>
                            </button>
                        </Link>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Help
