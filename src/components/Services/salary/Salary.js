import React from 'react';
import '../../../assets/scss/Salary.scss';
import caculator from '../../../assets/img/caculator.png';

const Salary = () => {
    return (
        <div className="salary-caculator">
            <section className="salary-header">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                        <Col lg={12}>
                            <div className="title-content-wrap">
                                <h1>Salary calculator</h1>
                                <h6>Try our live-quote calculator to evaluate the approximate costs for the talent you're looking to hire or for the estimated income you'll receive while working with Fetch.</h6>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className="img-wrap">
                                <img src={caculator} alt="caculator icon"/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            
        </div>
    )
}

export default Salary
