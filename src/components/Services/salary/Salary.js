import React, { useState } from 'react';
import '../../../assets/scss/Salary.scss';
import caculator from '../../../assets/img/caculator.png';
import { Row, Col, Select, Divider, Descriptions, Modal } from 'antd';
import iconFulltime from '../../../assets/img/iconFulltime.png';
import iconContract from '../../../assets/img/iconContract.png';
import iconFreelance from '../../../assets/img/iconFreelance.png';
import IconFontEnd from '../../../assets/img/iconFontEnd.svg';
import IconBackEnd from '../../../assets/img/iconBackEnd.svg';
import IconFullstack from '../../../assets/img/iconFullstack.svg';
import IconManager from '../../../assets/img/iconManager.svg';
import IconDesigner from '../../../assets/img/iconDesigner.svg';
import { ReactComponent as ArrowDown } from '../../../assets/img/arrowDown.svg';
import { ReactComponent as IconMoreInfo } from '../../../assets/img/iconMoreInfo.svg';
import ensignVN2 from '../../../assets/img/ensignVN2.png';
import ensignVN1 from '../../../assets/img/ensignVN1.png';
import ensignUSA2 from '../../../assets/img/ensignUSA2.png';
import ensignSGD1 from '../../../assets/img/ensignSGD1.png';
import ensignSGD2 from '../../../assets/img/ensignSGD2.png';
import hrAvt from '../../../assets/img/hrAvt.png';
import SlickSalary from './SlickSalary';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import LogoWhite from "../../../assets/img/LogoWhite.png";
import LogoMobileWhite from "../../../assets/img/LogoMobileWhite.png";

const billData = {
    employmentTypes: [
        { id: 1, title: 'full time', icon: iconFulltime},
        { id: 2, title: 'contract', icon: iconContract},
        { id: 3, title: 'freelance', icon: iconFreelance}
    ],
    areaExpertises: [
        { id: 1, title: 'fontend developer', description: 'implements designs for users and debugging', icon: IconFontEnd },
        { id: 2, title: 'backend developer', description: 'integrates and ensures smooth-running of app', icon: IconBackEnd },
        { id: 3, title: 'full stack developer', description: 'covers both frontend and backend activities', icon: IconFullstack },
        { id: 4, title: 'project Manager', description: 'oversees an entire project scope', icon: IconManager },
        { id: 5, title: 'designer', description: 'creates a relatable concept with attractive visuals', icon: IconDesigner }
    ],
    calTypes: [
        { id: 1, title: 'nett pay', },
        { id: 2, title: 'gross pay', },
        { id: 3, title: 'total', }
    ],
    amountTypes: [
        { id: 1, title: 'VND', icon: ensignVN2, defaultIcon: ensignVN1, },
        { id: 2, title: 'USD', icon: ensignUSA2, defaultIcon: ensignVN1 },
        { id: 3, title: 'SGD', icon: ensignSGD2, defaultIcon: ensignSGD1 }
    ],
    forTypes: ["for employer", "for employee"],
    billDetail: {
        total: "4,000,000.00",
        type: "VND",
        overview: [
            { id: 1, title: 'gross salary', percent: '52', amount: '12,0000' },
            { id: 1, title: 'social insurance', percent: '23', amount: '100,000' },
            { id: 1, title: 'health insurance', percent: '25', amount: '500,000' },
            { id: 1, title: 'unemployed insurance', amount: '500,00' },
            { id: 1, title: 'union tax', amount: '500,000' },
            { id: 1, title: 'PVI healthcare', amount: '500,000' },
        ]
    }
}


const Salary = () => {
    const [bill, setBill] = useState({
        employmentType: "full time",
        areaExpertise: "fontend developer",
        calType: "gross pay",
        forType: "for employer",
        currency: "USD",
    })

    return (
        <div className="salary-caculator">
            <Header theme = "#FFBE16" logoProp={LogoWhite} logoMobileProp = {LogoMobileWhite} />
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
                                    {billData?.employmentTypes?.map((eType, index) => (
                                        <Col key={index} span={8}>
                                            <div 
                                                role="button"
                                                className={`sal-opt-wrap ${bill.employmentType ===  eType?.title && "sal-opt-wrap-active"} e-type-opt`}
                                                onClick={() => setBill({...bill, employmentType: eType?.title})}
                                            >
                                                <div 
                                                    className={`icon-wrap ${bill.employmentType === eType?.title && "icon-wrap-active"}`}
                                                >
                                                    <img src={eType?.icon} alt="icon employment type" />
                                                </div>
                                                <span>{eType?.title}</span>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                            <div className="left-wrap expertise-wrap">
                                <div className="more-info">
                                    <label>Area of expertise</label>
                                    <MoreInfoModal />
                                </div>
                                <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, {xs: 17, sm: 17, md: 22, lg: 24}]}>
                                    {billData?.areaExpertises?.map((aE, index) => (
                                        <Col key={index} className="col-expertise-type-opt" xs={12} sm={12} md={8} lg={24}>
                                            <div 
                                                role="button"
                                                className={`sal-opt-wrap ${bill.areaExpertise === aE?.title && "sal-opt-wrap-active"} expertise-type-opt`}
                                                onClick={() => setBill({...bill, areaExpertise: aE?.title})}
                                            >
                                                <div className="expertise-type-opt-inner">
                                                    <div
                                                        className={`exp-icon-wrap ${bill.areaExpertise === aE?.title && "exp-icon-wrap-active"}`}
                                                    >
                                                        <img src={aE?.icon} alt="expertise icon"/>
                                                    </div>
                                                    <div className="exp-content-wrap ">
                                                        <h6>{aE?.title}</h6>
                                                        <p>{aE?.description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </Col>

                                    ))}
                                </Row>
                                
                            </div>
                            <div className="left-wrap calculation-type-wrap">
                                <label>Calculation type</label>
                                <Row className="row-calc-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                                    {billData?.calTypes?.map((calType, index) => (
                                        <Col key={index} span={8}>
                                            <div 
                                                role="button" 
                                                className={`sal-opt-wrap ${bill.calType === calType?.title && "sal-opt-wrap-active"} calc-type-opt`}
                                                onClick={() => setBill({...bill, calType: calType?.title})}
                                            >
                                                <span>{calType?.title}</span>
                                            </div>
                                        </Col>
                                    ))}
                                </Row>
                            </div>
                            <div className="left-wrap amount-wrap">
                                <label>Amount</label>
                                <Row className="row-amount" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                                    <Col xs={9} sm={8}>
                                        <div className="sal-opt-wrap-active money-unit">
                                            <SelectUnit data={billData?.amountTypes}/>
                                        </div>
                                    </Col>
                                    <Col xs={15} sm={16}>
                                        <div className="money">
                                            <span>{billData?.billDetail?.total}</span>
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
                                        {billData?.forTypes?.map((opt, index) => (
                                            <Col key={index} xs={12} sm={10}>
                                                <div 
                                                    role="button"
                                                    className={`sal-opt-wrap ${bill?.forType === opt && 'sal-opt-wrap-active'} for-type-wrap`}
                                                    onClick={() => setBill({...bill, forType: opt})}
                                                >
                                                    <span>{opt}</span>
                                                </div>
                                            </Col>
                                        ))}
                                    </Row>
                                    <div className="currency-wrap">
                                        <label>Currency</label>
                                        <Row className="currency-opt-wrap" gutter={[{ xs: 16, sm: 24, xl: 30 }, 0]}>
                                            {billData?.amountTypes?.map((aType, index) => (
                                                <Col key={index} className="col-currency-opt" span={8}>
                                                    <div 
                                                        role="button"
                                                        className={`sal-opt-wrap ${bill?.currency === aType?.title && 'sal-opt-wrap-active'} currency-opt`}
                                                        onClick={() => setBill({...bill, currency: aType?.title})}
                                                    >
                                                        {bill?.currency === aType?.title
                                                            ? <img src={aType?.icon} alt="ensign"/>
                                                            : <img src={aType?.defaultIcon} alt="ensign"/>
                                                        }
                                                        <span>{aType?.title}</span>
                                                    </div>
                                                </Col>
                                            ))}
                                        </Row>
                                    </div>
                                    <Divider className="divider-under-currency"/>
                                    <div className="breakdown-wrap">
                                        <p>Breakdown for</p>
                                        <h4>{`${bill?.currency} ${billData?.billDetail?.total}`}</h4>
                                    </div>
                                    <div className="overview-wrap">
                                        <h5>Overview</h5>
                                        <Descriptions column={1} colon={false}>
                                            {billData?.billDetail?.overview?.map((item, index) => (
                                                <Descriptions.Item 
                                                    key={index}
                                                    label={<LabelOverview data={item}/>} 
                                                >
                                                    {`${bill?.currency} ${item?.amount}`}
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
                                            <div role="button" className="card-bottom">View candidates</div>
                                        </div>
                                    </div>
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

const LabelOverview = ({ data }) => {
    return (
        <React.Fragment>
            <span>{data?.title}&nbsp;</span>
            {data?.percent && <span>{`(${data?.percent}%)`}</span>}
        </React.Fragment>
    )
}

const SelectUnit = ({ data }) => {
    const [selectedOpt, setOpt] = useState({ title: "VND", icon: ensignVN2 });

    const handleSelect = (value) => {
        console.log(value);
        let element = data?.filter(opt => opt?.title === value)[0];
        setOpt(element);
        console.log(element)
    }

    return (
        <div className="select-unit">
            <img src={selectedOpt?.icon} alt="icon unit"/>
            <Select 
                className="select" 
                value={selectedOpt?.title} 
                onChange={(val) => handleSelect(val)} 
                suffixIcon={<ArrowDown />}
            >
                {data?.map((opt, index) => <Select.Option key={index} value={opt?.title}>{opt?.title}</Select.Option>)}
            </Select>
        </div>
    )
}

export default Salary
