import React, { useState, useEffect } from 'react';
import '../../../assets/scss/Salary.scss';
import caculator from '../../../assets/img/caculator.png';
import { Row, Col, Select, Divider, Descriptions, Modal, Statistic } from 'antd';
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
import {convertExchangeRate, salaryCaculator} from "./utils";

const UI_Data = {
    employmentTypes: [
        { id: 1, title: 'full time', icon: iconFulltime },
        { id: 2, title: 'contract', icon: iconContract },
        { id: 3, title: 'freelance', icon: iconFreelance }
    ],
    areaExpertises: [
        { id: 1, title: 'fontend developer', description: 'implements designs for users and debugging', icon: IconFontEnd, },
        { id: 2, title: 'backend developer', description: 'integrates and ensures smooth-running of app', icon: IconBackEnd, },
        { id: 3, title: 'full stack developer', description: 'covers both frontend and backend activities', icon: IconFullstack, },
        { id: 4, title: 'project manager', description: 'oversees an entire project scope', icon: IconManager, },
        { id: 5, title: 'designer', description: 'creates a relatable concept with attractive visuals', icon: IconDesigner, }
    ],
    calcTypes: [
        { id: 1, title: 'net pay', },
        { id: 2, title: 'gross pay', },
        { id: 3, title: 'total', }
    ],
    amountTypes: [
        { id: 1, title: 'VND', activeIcon: ensignVN2, defaultIcon: ensignVN1, },
        { id: 2, title: 'USD', activeIcon: ensignUSA2, defaultIcon: ensignVN1 },
        { id: 3, title: 'SGD', activeIcon: ensignSGD2, defaultIcon: ensignSGD1 }
    ],
    forTypes: ["for employer", "for employee"],
}

const responseData = [
    { id: 1, role: 'fontend developer', employmentTypes: [
        {id: 1, employmentType: "full time", gross: 10*10**6},
        {id: 2, employmentType: "contract", gross: 8*10**6},
        {id: 3, employmentType: "freelance", gross: 5*10**6}
    ]},
    { id: 2, role: 'backend developer', employmentTypes: [
        {id: 1, employmentType: "full time", gross: 11*10**6},
        {id: 2, employmentType: "contract", gross: 9*10**6},
        {id: 3, employmentType: "freelance", gross: 6*10**6}
    ]},
    { id: 3, role: 'full stack developer', employmentTypes: [
        {id: 1, employmentType: "full time", gross: 12*10**6},
        {id: 2, employmentType: "contract", gross: 10*10**6},
        {id: 3, employmentType: "freelance", gross: 7*10**6}
    ]},
    { id: 4, role: 'project manager', employmentTypes: [
        {id: 1, employmentType: "full time", gross: 13*10**6},
        {id: 2, employmentType: "contract", gross: 11*10**6},
        {id: 3, employmentType: "freelance", gross: 8*10**6}
    ]},
    { id: 5, role: 'designer', employmentTypes: [
        {id: 1, employmentType: "full time", gross: 14*10**6},
        {id: 2, employmentType: "contract", gross: 12*10**6},
        {id: 3, employmentType: "freelance", gross: 9*10**6}
    ]}
]

const Salary = () => {
    const [salaryState, setSalaryState] = useState({
        employmentType: "full time",
        areaExpertise: "fontend developer",
        gross: 0,
    })

    const findGross = (eType, aExType, data) => {
        let gross = 0;

        for(const item of data) {
            if(item.role === aExType) {
                let result = item.employmentTypes.find(val => val.employmentType === eType);
                return result.gross;
            }
        }

        return gross;
    }

    const handleEmploymentType = (eType) => {
        let gross = findGross(eType, salaryState.areaExpertise, responseData);
        
        setSalaryState({ ...salaryState, employmentType: eType, gross: gross, });
    }

    const handleAreaExpertise = (aExType) => {
        let gross = findGross(salaryState.employmentType, aExType, responseData);
        
        setSalaryState({ ...salaryState, areaExpertise: aExType, gross: gross,  });
    }

    useEffect(() => {
        let data = responseData;
        let gross = findGross(salaryState.employmentType, salaryState.areaExpertise, data);
        
        console.log("gross: ", gross);
        setSalaryState({ ...salaryState, gross: gross });
        console.log("bill in effect: ", salaryState);

    }, [])

    return (
        <div className="salary-caculator">
            <Header theme="#FFBE16" logoProp={LogoWhite} logoMobileProp={LogoMobileWhite} />
            <section className="salary-header">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]} justify="space-between">
                        <Col className="col-title" xs={24} sm={24} md={12} lg={{ span: 12, offset: 2 }}>
                            <div className="title-content-wrap">
                                <h1>Salary calculator</h1>
                                <h6>Try our live-quote calculator to evaluate the approximate costs for the talent you're looking to hire or for the estimated income you'll receive while working with Fetch.</h6>
                            </div>
                        </Col>
                        <Col className="col-img" xs={18} sm={18} md={6}>
                            <div className="img-wrap">
                                <img src={caculator} alt="caculator icon" />
                            </div>
                        </Col>
                    </Row>
                </div>
            </section>
            <section className="salary-caculator">
                <div className="cus-container">
                    <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, { xs: 85, sm: 85 }]}>
                        <Col className="col-left" xs={24} sm={24} lg={12}>
                            <div className="left-wrap employment-type-wrap">
                                <label>Employment type</label>
                                <Row className="row-employment-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                                    {UI_Data?.employmentTypes?.map((eType, index) => (
                                        <Col key={index} span={8}>
                                            <div
                                                role="button"
                                                className={`sal-opt-wrap ${salaryState.employmentType === eType?.title && "sal-opt-wrap-active"} e-type-opt`}
                                                onClick={() => handleEmploymentType(eType?.title)}
                                            >
                                                <div
                                                    className={`icon-wrap ${salaryState.employmentType === eType?.title && "icon-wrap-active"}`}
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
                                <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, { xs: 17, sm: 17, md: 22, lg: 24 }]}>
                                    {UI_Data?.areaExpertises?.map((aE, index) => (
                                        <Col key={index} className="col-expertise-type-opt" xs={12} sm={12} md={8} lg={24}>
                                            <div
                                                role="button"
                                                className={`sal-opt-wrap ${salaryState.areaExpertise === aE?.title && "sal-opt-wrap-active"} expertise-type-opt`}
                                                onClick={() => handleAreaExpertise(aE?.title)}
                                            >
                                                <div className="expertise-type-opt-inner">
                                                    <div
                                                        className={`exp-icon-wrap ${salaryState.areaExpertise === aE?.title && "exp-icon-wrap-active"}`}
                                                    >
                                                        <img src={aE?.icon} alt="expertise icon" />
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
                            <SummarySalaryWrap gross={salaryState.gross} />
                            
                        </Col>
                        <Col className="col-right" xs={24} sm={24} lg={12}>
                            <div className="col-inner">
                                <label className="label-pedal">&nbsp;</label>
                                <RightBillWrap gross={salaryState.gross}/>
                                <div className="right-wrap hr-card-wrap">
                                    <div className="card-top-wrap">
                                        <img src={hrAvt} alt="hr-avt" />
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

const SummarySalaryWrap = ({gross}) => {
    console.log("in summary: ", gross);

    const [summarySate, setSummaryState] = useState({
        calcType: "gross pay",
        currency: "VND",
        amount: 0,
        iconCurrency: null
    });

    const handleCalcType = (calcType) => {
        let amount = caculateAmount(gross, calcType);

        setSummaryState({
            ...summarySate,
            calcType: calcType,
            amount: convertExchangeRate(summarySate.currency, amount),
        })
    }

    const handleChangeCurrency = (value) => {
        let element = UI_Data.amountTypes.find(item => item.title === value);
        let amount = convertExchangeRate(value, gross);

        setSummaryState({
            ...summarySate,
            currency: value,
            amount: amount,
            iconCurrency: element.activeIcon
        })
        
    }

    const caculateAmount = (gross, calcType) => {
        let caculateData = salaryCaculator(gross);

        let amount = 0;
        if(calcType === "net pay") {
            amount = caculateData.forEmployee.find(item => item.title === "NET").amount;
        } else if(calcType === "gross pay") {
            amount = gross;
        } else if(calcType === "total") {
            amount =  caculateData.forEmployer.find(item => item.title === "Total Expenses").amount;
        }

        return amount;
    }

    useEffect(() => {
        let element = UI_Data.amountTypes.find(item => item.title === summarySate.currency);
        let amount = caculateAmount(gross, summarySate.calcType);

        setSummaryState({
            ...summarySate, 
            amount: amount, 
            iconCurrency: element.activeIcon
        })
    }, [gross])

    return (
        <>
        <div className="left-wrap calculation-type-wrap">
            <label>Calculation type</label>
            <Row className="row-calc-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                {UI_Data.calcTypes.map((item, index) => (
                    <Col className="col-calc-type" key={index} span={8}>
                        <div
                            role="button"
                            className={`sal-opt-wrap ${summarySate.calcType === item.title && "sal-opt-wrap-active"} calc-type-opt`}
                            onClick={() => handleCalcType(item?.title)}
                        >
                            <span>{item.title}</span>
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
                        <div className="select-unit">
                            <img src={summarySate.iconCurrency} alt="icon unit" />
                            <Select
                                className="select"
                                value={summarySate.currency}
                                onChange={(val) => handleChangeCurrency(val)}
                                suffixIcon={<ArrowDown />}
                            >
                                {UI_Data.amountTypes.map((opt, index) => <Select.Option key={index} value={opt.title}>{opt.title}</Select.Option>)}
                            </Select>
                        </div>
                    </div>
                </Col>
                <Col xs={15} sm={16}>
                    <div className="money">
                        <Statistic value={summarySate.amount} precision={2} />
                    </div>
                </Col>
            </Row>
        </div>
        </>
    )
}

const RightBillWrap = ({gross}) => {
    const [billState, setBill] = useState({
        forType: "for employer",
        currency: "VND",
        amount: 0,
        caculateData: null,
        overview: null,
    })

    const forTypeClassifier = (type, data) => {
        if(type === "for employee") return data.forEmployee;
        else if (type === "for employer") return data.forEmployer;
    }

    const handleChangeForType = (type) => {
        let overview = forTypeClassifier(type, billState.caculateData).map(item => {
            let temp = {...item};
            temp.amount = convertExchangeRate(billState.currency, item.amount);
            return temp;
        });

        setBill({ ...billState, forType: type, overview: overview });
    }

    const handleChangeCurrency = (type) => {
        let overview = forTypeClassifier(billState.forType, billState.caculateData).map(item => {
            let temp = {...item};
            temp.amount = convertExchangeRate(type, item.amount);
            return temp;
        });
        let amount = convertExchangeRate(type, gross);

        setBill({ ...billState, currency: type, overview: overview, amount: amount });
    }


    useEffect(() => {
        let caculateData = salaryCaculator(gross);

        let overview = forTypeClassifier(billState.forType, caculateData).map(item => {
            let temp = {...item};
            temp.amount = convertExchangeRate(billState.currency, item.amount);
            return temp;
        });
        let amount = convertExchangeRate(billState.currency, gross);

        setBill({
            ...billState,
            amount: amount,
            overview: overview,
            caculateData: caculateData,
        })
    }, [gross])

    return (
        <div className="right-wrap right-bill-wrap">
            <Row className="row-for-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                {UI_Data?.forTypes?.map((opt, index) => (
                    <Col key={index} xs={12} sm={10}>
                        <div
                            role="button"
                            className={`sal-opt-wrap ${billState?.forType === opt && 'sal-opt-wrap-active'} for-type-wrap`}
                            onClick={() => handleChangeForType(opt)}
                        >
                            <span>{opt}</span>
                        </div>
                    </Col>
                ))}
            </Row>

            <div className="currency-wrap">
                <label>Currency</label>
                <Row className="currency-opt-wrap" gutter={[{ xs: 16, sm: 24, xl: 30 }, 0]}>
                    {UI_Data?.amountTypes?.map((aType, index) => (
                        <Col key={index} className="col-currency-opt" span={8}>
                            <div
                                role="button"
                                className={`sal-opt-wrap ${billState?.currency === aType?.title && 'sal-opt-wrap-active'} currency-opt`}
                                onClick={() => handleChangeCurrency(aType?.title)}
                            >
                                {billState?.currency === aType?.title
                                    ? <img src={aType?.activeIcon} alt="ensign" />
                                    : <img src={aType?.defaultIcon} alt="ensign" />
                                }
                                <span>{aType?.title}</span>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            <Divider className="divider-under-currency" />

            <div className="breakdown-wrap">
                <p>Breakdown for</p>
                <div className="wrap-value">
                    <span>{billState?.currency}&nbsp;</span>
                    <Statistic value={billState.amount} precision={2} />
                </div>
            </div>

            <div className="overview-wrap">
                <h5>Overview</h5>
                <Descriptions column={1} colon={false}>
                    {billState?.overview?.map((item, index) => (
                        <Descriptions.Item
                            key={index}
                            label={<LabelOverview data={item} />}
                        >
                            {billState?.currency}&nbsp;
                            <Statistic value={item.amount} precision={2} />
                        </Descriptions.Item>
                    ))}
                </Descriptions>
            </div>
        </div>
    )
}

export default Salary
