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

const EXCHANGE_RATE_VND = 1;
const EXCHANGE_RATE_USD = 23296;
const EXCHANGE_RATE_SGD = 16798;

const taxData = {
    si: 17.5, hi: 3, ui: 1, tu: 2, pvi: 250000,
    taxDeductions: {
        self: 11000000,
        dependent: 4400000,
        si: 8,
        hi: 1.5,
        ui: 1
    }
}

const billData = {
    employmentTypes: [
        { id: 1, title: 'full time', icon: iconFulltime },
        { id: 2, title: 'contract', icon: iconContract },
        { id: 3, title: 'freelance', icon: iconFreelance }
    ],
    areaExpertises: [
        { id: 1, title: 'fontend developer', description: 'implements designs for users and debugging', icon: IconFontEnd, gross: 4000000, currency: "VND"},
        { id: 2, title: 'backend developer', description: 'integrates and ensures smooth-running of app', icon: IconBackEnd, gross: 5000000, currency: "VND" },
        { id: 3, title: 'full stack developer', description: 'covers both frontend and backend activities', icon: IconFullstack, gross: 6000000, currency: "VND" },
        { id: 4, title: 'project Manager', description: 'oversees an entire project scope', icon: IconManager, gross: 7000000, currency: "VND" },
        { id: 5, title: 'designer', description: 'creates a relatable concept with attractive visuals', icon: IconDesigner, gross: 8000000, currency: "VND" }
    ],
    calTypes: [
        { id: 1, title: 'net pay', },
        { id: 2, title: 'gross pay', },
        { id: 3, title: 'total', }
    ],
    amountTypes: [
        { id: 1, title: 'VND', icon: ensignVN2, defaultIcon: ensignVN1, },
        { id: 2, title: 'USD', icon: ensignUSA2, defaultIcon: ensignVN1 },
        { id: 3, title: 'SGD', icon: ensignSGD2, defaultIcon: ensignSGD1 }
    ],
    forTypes: ["for employer", "for employee"],
    taxDeductions: {
        seft: 11000000,
        dependent: 4400000,
        siPercent: 8,
        hiPercent: 1.5,
        uiPercent: 1,
    },
    billDetail: {
        overview: [
            { id: 1, title: 'gross salary' },
            { id: 2, title: 'social insurance', percent: 17.5, },
            { id: 3, title: 'health insurance', percent: 3, },
            { id: 4, title: 'unemployed insurance', percent: 1, },
            { id: 5, title: 'union tax', percent: 2 },
            { id: 6, title: 'PVI healthcare',},
        ]
    }
}

const overviewData = {
    forEmployer: [
        { id: 1, title: 'Gross salary',},
        { id: 2, title: "Social insurance", percent: 17.5,},
        { id: 3, title: "Health insurance", percent: 3 },
        { id: 4, title: "Unemployed insurance", percent: 1 },
        { id: 5, title: "Union tax", percent: 2},
        { id: 6, title: "PVI healthcare"},
        { id: 7, title: "NET"},
        { id: 8, title: "Total Expenses"}
    ],
    forEmployee: [
        { id: 1, title: 'Gross salary',},
        { id: 2, title: "Social insurance", percent: 8},
        { id: 3, title: "Health insurance", percent: 1.5 },
        { id: 4, title: "Unemployed insurance", percent: 1 },
        { id: 5, title: "PIT",},
        { id: 6, title: "Tax deductions"},
        { id: 7, title: "NET"}
    ]
}

const Salary = () => {
    const [bill, setBill] = useState({
        employmentType: "full time",
        areaExpertise: "fontend developer",
        calType: "gross pay",
        forType: "for employer",
        currency: "VND",
        total: 4000000,
        amountTotal: 4000000,
        rightTotal: 400000,
        overview: [...overviewData.forEmployer]
    })

    const handleChangeCalcType = (value) => {
        let salaryData = salaryCaculator(bill.total, taxData);

        if(value === "net pay") {
            setBill({
                ...bill,
                calType: value,
                amountTotal: salaryData.forEmployee.NET,
            })
        } else if(value === "gross pay") {
            setBill({
                ...bill,
                calType: value,
                amountTotal: bill.total,
            })
        } else if(value === "total") {
            setBill({
                ...bill,
                calType: value,
                amountTotal: salaryData.forEmployer.totalExpenses,
            })
        }
    }

    const handleChangeCurrencyRight = (value) => {
        console.log("before: ", bill.overview);

        let temp = bill.overview.map(item => {
            if(value === "USD" && bill.currency === "VND") {
                return {...item, amount: 1.0*item.amount/EXCHANGE_RATE_USD}
            }
            else if(value === "SGD" && bill.currency === "VND") {
                return {...item, amount: 1.0*item.amount/EXCHANGE_RATE_SGD}
            }
            else if(value === "VND" && bill.currency === "USD") {
                return {...item, amount: 1.0*item.amount*EXCHANGE_RATE_USD}
            }
            else if(value === "SGD" && bill.currency === "USD") {
                return {...item, amount: 1.0*item.amount*EXCHANGE_RATE_USD/EXCHANGE_RATE_SGD}
            }
            else if(value === "VND" && bill.currency === "SGD") {
                return {...item, amount: 1.0*item.amount*EXCHANGE_RATE_SGD}
            }
            else if(value === "USD" && bill.currency === "SGD") {
                return {...item, amount: 1.0*item.amount*EXCHANGE_RATE_SGD/EXCHANGE_RATE_USD}
            }
        })

        console.log("after: ", temp);

        setBill({
            ...bill,
            currency: value,
            rightTotal: convertExchangeRate(value, bill.total),
            overview: [...temp]
        })
    }

    const handleChangeForType = (value) => {
        

        if(value === "for employee") {

            let temp = overviewData.forEmployee;
            let salary = salaryCaculator(bill.rightTotal, taxData);
            temp[0]["amount"] = bill.rightTotal;
            temp[1]["amount"] = salary.forEmployee.SI;
            temp[2]["amount"] = salary.forEmployee.HI;
            temp[3]["amount"] = salary.forEmployee.UI;
            temp[4]["amount"] = salary.forEmployee.PIT;
            temp[5]["amount"] = salary.forEmployee.taxDeductions;
            temp[6]["amount"] = salary.forEmployer.NET;

            setBill({
                ...bill,
                forType: value,
                overview: [...temp]
            })

        } else if (value === "for employer") {
            let temp = overviewData.forEmployer;

            let salary = salaryCaculator(bill.rightTotal, taxData);
            temp[0]["amount"] = bill.rightTotal;
            temp[1]["amount"] = salary.forEmployer.SI;
            temp[2]["amount"] = salary.forEmployer.HI;
            temp[3]["amount"] = salary.forEmployer.UI;
            temp[4]["amount"] = salary.forEmployer.TU;
            temp[5]["amount"] = 250000;
            temp[6]["amount"] = salary.forEmployer.NET;
            temp[7]["amount"] = salary.forEmployer.totalExpenses;

            setBill({
                ...bill,
                forType: value,
                overview: [...temp]
            })
        }

        

    }

    useEffect(() => {
        let temp = overviewData.forEmployer;

        let salary = salaryCaculator(4000000, taxData);
        temp[0]["amount"] = 4000000;
        temp[1]["amount"] = salary.forEmployer.SI;
        temp[2]["amount"] = salary.forEmployer.HI;
        temp[3]["amount"] = salary.forEmployer.UI;
        temp[4]["amount"] = salary.forEmployer.TU;
        temp[5]["amount"] = 250000;
        temp[6]["amount"] = salary.forEmployer.NET;
        temp[7]["amount"] = salary.forEmployer.totalExpenses;

        setBill({
            ...bill,
            overview: [...temp]
        })

        console.log("bill 1: ", bill);
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
                                    {billData?.employmentTypes?.map((eType, index) => (
                                        <Col key={index} span={8}>
                                            <div
                                                role="button"
                                                className={`sal-opt-wrap ${bill.employmentType === eType?.title && "sal-opt-wrap-active"} e-type-opt`}
                                                onClick={() => setBill({ ...bill, employmentType: eType?.title })}
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
                                <Row gutter={[{ xs: 21, sm: 24, xl: 30 }, { xs: 17, sm: 17, md: 22, lg: 24 }]}>
                                    {billData?.areaExpertises?.map((aE, index) => (
                                        <Col key={index} className="col-expertise-type-opt" xs={12} sm={12} md={8} lg={24}>
                                            <div
                                                role="button"
                                                className={`sal-opt-wrap ${bill.areaExpertise === aE?.title && "sal-opt-wrap-active"} expertise-type-opt`}
                                                onClick={() => setBill({ ...bill, areaExpertise: aE?.title })}
                                            >
                                                <div className="expertise-type-opt-inner">
                                                    <div
                                                        className={`exp-icon-wrap ${bill.areaExpertise === aE?.title && "exp-icon-wrap-active"}`}
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
                            <div className="left-wrap calculation-type-wrap">
                                <label>Calculation type</label>
                                <Row className="row-calc-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                                    {billData?.calTypes?.map((calType, index) => (
                                        <Col className="col-calc-type" key={index} span={8}>
                                            <div
                                                role="button"
                                                className={`sal-opt-wrap ${bill.calType === calType?.title && "sal-opt-wrap-active"} calc-type-opt`}
                                                onClick={() => handleChangeCalcType(calType?.title)}
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
                                    <AmountWrapper optData={billData.amountTypes} salary={bill.amountTotal} />
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
                                            {billData?.amountTypes?.map((aType, index) => (
                                                <Col key={index} className="col-currency-opt" span={8}>
                                                    <div
                                                        role="button"
                                                        className={`sal-opt-wrap ${bill?.currency === aType?.title && 'sal-opt-wrap-active'} currency-opt`}
                                                        onClick={() => handleChangeCurrencyRight(aType?.title)}
                                                    >
                                                        {bill?.currency === aType?.title
                                                            ? <img src={aType?.icon} alt="ensign" />
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
                                            <span>{bill?.currency}&nbsp;</span>
                                            <Statistic value={bill?.rightTotal} precision={2} />
                                        </div>
                                    </div>
                                    <div className="overview-wrap">
                                        <h5>Overview</h5>
                                        <Descriptions column={1} colon={false}>
                                            {bill.overview.map((item, index) => (
                                                <Descriptions.Item
                                                    key={index}
                                                    label={<LabelOverview data={item} />}
                                                >
                                                    {bill?.currency}&nbsp;
                                                    <Statistic value={item.amount} precision={2} />
                                                </Descriptions.Item>
                                            ))}
                                        </Descriptions>
                                    </div>
                                </div>
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
    console.log("in label: ", data);
    return (
        <React.Fragment>
            <span>{data?.title}&nbsp;</span>
            {data?.percent && <span>{`(${data?.percent}%)`}</span>}
        </React.Fragment>
    )
}

const AmountWrapper = ({ optData, salary }) => {
    const [amount, setAmount] = useState({
        currency: "VND",
        money: salary ? salary : 0,
        icon: ensignVN2
    });

    console.log("bill: ", salary);

    const handleSelectChange = (value) => {
        console.log(value);
        let element = optData.find(x => x.title === value);

        setAmount({
            ...amount,
            currency: value,
            money: convertExchangeRate(value, salary),
            icon: element.icon,
        })
        
        console.log("amount: ", amount);
    }
    
    useEffect(() => {
        setAmount({...amount, money: convertExchangeRate(amount.currency, salary)})
    }, [salary])

    return (
        <>
        <Col xs={9} sm={8}>
            <div className="sal-opt-wrap-active money-unit">
                <div className="select-unit">
                    <img src={amount?.icon} alt="icon unit" />
                    <Select
                        className="select"
                        value={amount?.currency}
                        onChange={(val) => handleSelectChange(val)}
                        suffixIcon={<ArrowDown />}
                    >
                        {optData?.map((opt, index) => <Select.Option key={index} value={opt?.title}>{opt?.title}</Select.Option>)}
                    </Select>
                </div>
            </div>
        </Col>
        <Col xs={15} sm={16}>
            <div className="money">
                <Statistic value={amount.money} precision={2} />
            </div>
        </Col>
        </>
    )
}

export default Salary
