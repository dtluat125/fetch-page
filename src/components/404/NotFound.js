import { Row, Col } from 'antd';
import React from 'react';
import '../../assets/scss/NotFound.scss';

const NotFound = () => {
    return (
        <div className="not-found">
            <section>header waiting</section>
            <section className="not-found-body">
                <div className="cus-container">
                    <Row className="not-found-body-row" gutter={30} justify="center">
                        <Col span={12}>
                            <h6>Oh no! The page you’re looking for is currently unavailable. Please try again later.</h6>
                            <div className="btn-direct">
                                <button>Go Back</button>
                                <button>Go Home</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section>footer waiting</section>
            
        </div>
    )
}

export default NotFound
