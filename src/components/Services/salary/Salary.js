import React, { useState } from 'react';
import '../../../assets/scss/Salary.scss';
import caculator from '../../../assets/img/caculator.png';
import { Row, Col, Select, Divider, Descriptions, Modal } from 'antd';
import iconFulltime from '../../../assets/img/iconFulltime.png';
import iconContract from '../../../assets/img/iconContract.png';
import iconFreelance from '../../../assets/img/iconFreelance.png';
import { ReactComponent as IconFontEnd } from '../../../assets/img/iconFontEnd.svg';
import { ReactComponent as IconBackEnd } from '../../../assets/img/iconBackEnd.svg';
import { ReactComponent as IconFullstack } from '../../../assets/img/iconFullstack.svg';
import { ReactComponent as IconManager } from '../../../assets/img/iconManager.svg';
import { ReactComponent as IconDesigner } from '../../../assets/img/iconDesigner.svg';
import { ReactComponent as ArrowDown } from '../../../assets/img/arrowDown.svg';
import { ReactComponent as IconMoreInfo } from '../../../assets/img/iconMoreInfo.svg';
import logoFaq from '../../../assets/img/logoFaq.png';
import ensignVN from '../../../assets/img/ensignVN.png';
import hrAvt from '../../../assets/img/hrAvt.png';
import SlickSalary from './SlickSalary';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
const Salary = () => {
    return (
        <div className="salary-caculator">
            <Header theme="#FFBE16" logoProp={logoFaq}/>
            <section className="salary-header">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]} justify="space-between">
                        <Col className="col-title" xs={24} sm={24} md={12} lg={{span: 12, offset: 2}}>
                            <div className="title-content-wrap">
                                <h1>Salary calculator</h1>
                                <h6>Try our live-quote calculator to evaluate the approximate costs for the talent you're looking to hire or for the estimated income you'll receive while working with Fetch.</h6>
                            </div>
                        </Col>
                        <Col className="col-img" xs={18} sm={18} md={6}>
                            <div className="img-wrap">
                                <img src={caculator} alt="caculator icon"/>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="salary-caculator">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, {xs: 85, sm: 85 }]}>
                        <Col className="col-left" xs={24} sm={24} lg={12}>
                            <div className="left-wrap employment-type-wrap">
                                <label>Employment type</label>
                                <Row className="row-employment-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                                    <Col span={8}>
                                        <div role="button" className="sal-opt-wrap sal-opt-wrap-active e-type-opt">
                                            <div className="icon-wrap icon-wrap-active">
                                                <img src={iconFulltime} alt="icon employment type" />
                                            </div>
                                            <span>Full time</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div role="button" className="sal-opt-wrap e-type-opt">
                                            <div className="icon-wrap">
                                                <img src={iconContract} alt="icon employment type" />
                                            </div>
                                            <span>Contract</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div role="button" className="sal-opt-wrap e-type-opt">
                                            <div className="icon-wrap">
                                                <img src={iconFreelance} alt="icon employment type" />
                                            </div>
                                            <span>Freelance</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="left-wrap expertise-wrap">
                                <div className="more-info">
                                    <label>Area of expertise</label>
                                    <MoreInfoModal />
                                </div>
                                <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, {xs: 17, sm: 17, md: 22, lg: 24}]}>
                                    <Col className="col-expertise-type-opt" xs={12} sm={12} md={8} lg={24}>
                                        <div role="button" className="sal-opt-wrap expertise-type-opt">
                                            <div className="expertise-type-opt-inner">
                                                <div className="exp-icon-wrap">
                                                    <IconFontEnd />
                                                </div>
                                                <div className="exp-content-wrap">
                                                    <h6>Frontend developer</h6>
                                                    <p>Implements designs for users and debugging</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="col-expertise-type-opt" xs={12} sm={12} md={8} lg={24}>
                                        <div role="button" className="sal-opt-wrap expertise-type-opt">
                                            <div className="expertise-type-opt-inner">
                                                <div className="exp-icon-wrap ">
                                                    <IconBackEnd />
                                                </div>
                                                <div className="exp-content-wrap ">
                                                    <h6>Backend developer</h6>
                                                    <p>Integrates and ensures smooth-running of app</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="col-expertise-type-opt" xs={12} sm={12} md={8} lg={24}>
                                        <div role="button" className="sal-opt-wrap expertise-type-opt">
                                            <div className="expertise-type-opt-inner">
                                                <div className="exp-icon-wrap ">
                                                    <IconFullstack />
                                                </div>
                                                <div className="exp-content-wrap ">
                                                    <h6>Full stack developer</h6>
                                                    <p>Covers both frontend and backend activities</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="col-expertise-type-opt" xs={12} sm={12} md={8} lg={24}>
                                        <div role="button" className="sal-opt-wrap expertise-type-opt">
                                            <div className="expertise-type-opt-inner">
                                                <div className="exp-icon-wrap ">
                                                    <IconManager />
                                                </div>
                                                <div className="exp-content-wrap ">
                                                    <h6>Project Manager</h6>
                                                    <p>Oversees an entire project scope</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col className="col-expertise-type-opt" xs={12} sm={12} md={8} lg={24}>
                                        <div role="button" className="sal-opt-wrap expertise-type-opt">
                                            <div className="expertise-type-opt-inner">
                                                <div className="exp-icon-wrap ">
                                                    <IconDesigner />
                                                </div>
                                                <div className="exp-content-wrap ">
                                                    <h6>Designer</h6>
                                                    <p>Creates a relatable concept with attractive visuals</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                                
                            </div>
                            <div className="left-wrap calculation-type-wrap">
                                <label>Calculation type</label>
                                <Row className="row-calc-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                                    <Col span={8}>
                                        <div role="button" className="sal-opt-wrap calc-type-opt">
                                            <span>Nett pay</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div role="button" className="sal-opt-wrap sal-opt-wrap-active calc-type-opt">
                                            <span>Gross pay</span>
                                        </div>
                                    </Col>
                                    <Col span={8}>
                                        <div role="button" className="sal-opt-wrap calc-type-opt">
                                            <span>Total pay</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                            <div className="left-wrap amount-wrap">
                                <label>Amount</label>
                                <Row className="row-amount" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                                    <Col xs={9} sm={8}>
                                        <div className="sal-opt-wrap-active money-unit">
                                            <SelectUnit data={data}/>
                                        </div>
                                    </Col>
                                    <Col xs={15} sm={16}>
                                        <div className="money">
                                            <span>4,000,000.00</span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col className="col-right" xs={24} sm={24} lg={12}>
                            <div className="col-inner">
                                <label className="label-pedal">&nbsp;</label>
                                <div className="right-wrap right-bill-wrap">
                                    <Row className="row-for-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                                        <Col xs={12} sm={10}>
                                            <div className="sal-opt-wrap sal-opt-wrap-active for-type-wrap">
                                                <span>For employer</span>
                                            </div>
                                        </Col>
                                        <Col xs={12} sm={10}>
                                            <div className="sal-opt-wrap for-type-wrap">
                                                <span>For employee</span>
                                            </div>
                                        </Col>
                                    </Row>
                                    <div className="currency-wrap">
                                        <label>Currency</label>
                                        <Row className="currency-opt-wrap" gutter={[{ xs: 16, sm: 24, xl: 30 }, 0]}>
                                            <Col span={8}>
                                                <div className="sal-opt-wrap currency-opt">
                                                    <img src={ensignVN} alt="ensign"/>
                                                    <span>VND</span>
                                                </div>
                                            </Col>
                                            <Col span={8}>
                                                <div className="sal-opt-wrap sal-opt-wrap-active currency-opt">
                                                    <img src={ensignVN} alt="ensign"/>
                                                    <span>USD</span>
                                                </div>
                                            </Col>
                                            <Col span={8}>
                                                <div className="sal-opt-wrap currency-opt">
                                                    <img src={ensignVN} alt="ensign"/>
                                                    <span>SGD</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <Divider className="divider-under-currency"/>
                                    <div className="breakdown-wrap">
                                        <p>Breakdown for</p>
                                        <h4>VND 4,000,000.00</h4>
                                    </div>
                                    <div className="overview-wrap">
                                        <h5>Overview</h5>
                                        <Descriptions column={1} colon={false}>
                                            {overviewData?.map((item, index) => (
                                                <Descriptions.Item 
                                                    key={index}
                                                    label={<LabelOverview data={item}/>} 
                                                >
                                                    {item?.value}
                                                </Descriptions.Item>

                                            ))}
                                        </Descriptions>
                                    </div>
                                </div>
                                <div className="right-wrap hr-card-wrap">
                                    <div className="card-top-wrap">
                                        <img src={hrAvt} alt="hr-avt"/>
                                        <div className="card-content">
                                            <h5>Hiring someone from Vietnam soon? </h5>
                                            <p>Check out some of the better candidates that have passed our evaluation.</p>
                                        </div>
                                    </div>
                                    <div className="card-bottom">See recommended candidates</div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="ready">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]} justify="center">
                        <Col xs={24} sm={24} lg={16}>
                            <div className="ready-wrap">
                                <h2>Ready to get started?</h2>
                                <h6>Explore our diverse selection of talents and build your dream team now.</h6>
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="slick">
                <div className="cus-container-fluid">
                    <SlickSalary />
                </div>
            </section>
            <Footer />
            
        </div>
    )
}

const MoreInfoModal = () => {
    const [visible, setVisible] = useState(false);

    return (
        <React.Fragment>
            <span onClick={() => setVisible(true)}>
                <IconMoreInfo />
            </span>
            <Modal
                className="modal-expertise"
                visible={visible}
                title="Area of expertise"
                footer={null}
                onCancel={() => setVisible(false)}
                centered
            >
                <div className="modal-exp-content-wrap">
                    <h6>Frontend developer</h6>
                    <p>Implements designs for users and debugging</p>
                </div>
                <div className="modal-exp-content-wrap ">
                    <h6>Backend developer</h6>
                    <p>Integrates and ensures smooth-running of app</p>
                </div>
                <div className="modal-exp-content-wrap ">
                    <h6>Full stack developer</h6>
                    <p>Covers both frontend and backend activities</p>
                </div>
                <div className="modal-exp-content-wrap ">
                    <h6>Project Manager</h6>
                    <p>Oversees an entire project scope</p>
                </div>
                <div className="modal-exp-content-wrap ">
                    <h6>Designer</h6>
                    <p>Creates a relatable concept with attractive visuals</p>
                </div>
            </Modal>
        </React.Fragment>
    )
}

const overviewData = [
    { id: 1, title: "Gross salary", percent: "52%", value: "VND 12,000"},
    { id: 2, title: "Social insurance", percent: "23%", value: "VND 100,000"},
    { id: 3, title: "Health insurance", percent: "25%", value: "VND 500,000"},
    { id: 4, title: "Unemployed insurance", value: "VND 500,000"},
    { id: 5, title: "Union tax", value: "VND 500,000"},
    { id: 6, title: "PVI healthcare", value: "VND 500,000"}
]

const LabelOverview = ({ data }) => {
    return (
        <React.Fragment>
            <span>{data?.title}&nbsp;</span>
            {data?.percent && <span>({data?.percent})</span>}
        </React.Fragment>
    )
}

const data = [
    {id: 1, icon: ensignVN, value: 'VND'},
    {id: 2, icon: ensignVN, value: 'USD'},
    {id: 3, icon: ensignVN, value: 'EUR'},
]

const SelectUnit = ({ data }) => {
    const [selectedOpt, setOpt] = useState(data[0]);

    const handleSelect = (value) => {
        console.log(value);
        let element = data?.filter(opt => opt?.value === value)[0];
        setOpt(element);
        console.log(element)
    }

    return (
        <div className="select-unit">
            <img src={selectedOpt?.icon} alt="icon unit"/>
            <Select 
                className="select" 
                value={selectedOpt?.value} 
                onChange={(val) => handleSelect(val)} 
                suffixIcon={<ArrowDown />}
            >
                {data?.map((opt, index) => <Select.Option key={index} value={opt?.value}>{opt?.value}</Select.Option>)}
            </Select>
        </div>
    )
}

export default Salary
