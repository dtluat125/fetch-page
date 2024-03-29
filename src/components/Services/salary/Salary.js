import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import qs from 'query-string'
import '../../../assets/scss/Salary.scss';
import caculator from '../../../assets/img/caculator.png';
import { Row, Col, Select, Divider, Descriptions, Modal, Statistic, InputNumber } from 'antd';
import iconFulltime from '../../../assets/img/iconFulltime.png';
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
import LogoWhite from "../../../assets/img/LogoWhite.svg";
import LogoMobileWhite from "../../../assets/img/LogoMobileWhite.svg";
import {convertExchangeRate, salaryCaculator, convertToVND} from "./utils";

const UI_Data = {
    employmentTypes: [
        { id: 1, title: 'full time', icon: iconFulltime },
        // { id: 2, title: 'contract', icon: iconContract },
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
        { id: 1, title: 'net', },
        { id: 2, title: 'gross', },
        { id: 3, title: 'total', }
    ],
    convertTypes: [
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
    const location = useLocation();
    const history = useHistory();

    const [salaryState, setSalaryState] = useState({
        employmentType: "full time",
        calcType: "gross",
        convertType: "net",
        forType: "for employer",
        billCurrency: "VND",
        gross: 0,
    })

    const handleEmploymentType = (eType) => {
        if(location.search) {
            let params = qs.parse(location.search);
            params["employmentType"] = eType;
    
            history.push({
                pathname: '/services/salary/',
                search: `?${qs.stringify(params)}`
            })
        } else setSalaryState({ ...salaryState, employmentType: eType});
    }

    useEffect(() => {
        if(location.search) {
            let params = qs.parse(location.search);
            //console.log("params: ", params);

            if(params["employmentType"] && params["calcType"] 
                && params["amount"] && params["currency"]
                && params["forType"] && params["billCurrency"]) {

                let gross = convertToVND(params["currency"], parseFloat(params["amount"]));

                setSalaryState({
                    employmentType: params["employmentType"],
                    calcType: params["calcType"],
                    forType: params["forType"],
                    billCurrency: params["billCurrency"],
                    gross: gross
                })

            }

        }
        
    }, [location.search])
 
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
                            {/* <ConvertTypeWrap salaryState={salaryState} setSalaryState={setSalaryState} /> */}
                            <CalcTypeWrap salaryState={salaryState} setSalaryState={setSalaryState} />
                            <AmountWrap salaryState={salaryState} setSalaryState={setSalaryState} />
                        </Col>
                        <Col className="col-right" xs={24} sm={24} lg={12}>
                            <div className="col-inner">
                                <label className="label-pedal">&nbsp;</label>
                                <RightBillWrap salaryState={salaryState} setSalaryState={setSalaryState} />
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

const CalcTypeWrap = ({salaryState, setSalaryState}) => {
    const location = useLocation();
    const history = useHistory();

    const handleCalcType = (calcType) => {
        if(location.search) {
            let params = qs.parse(location.search);
            params["calcType"] = calcType;

            history.push({
                pathname: '/services/salary/',
                search: `?${qs.stringify(params)}`
            })
        } else setSalaryState(state => ({...state, calcType: calcType}))
        
    }

    return (
        <div className="left-wrap calculation-type-wrap">
            <label>Calculation type</label>
            <Row className="row-calc-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                {UI_Data.calcTypes.map((item, index) => (
                    <Col className="col-calc-type" key={index} span={8}>
                        <div
                            role="button"
                            className={`sal-opt-wrap ${salaryState.calcType === item.title && "sal-opt-wrap-active"} calc-type-opt`}
                            onClick={() => handleCalcType(item?.title)}
                        >
                            <span>{item.title}</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

const ConvertTypeWrap = ({salaryState, setSalaryState}) => {

    const handleConvertType = (convertType) => {
        setSalaryState(state => ({...state, convertType: convertType}))
    }

    return (
        <>
        <div className="left-wrap convert-type-wrap">
            <label>Convert type</label>
            <Row className="row-convert-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                {UI_Data.convertTypes.map((item, index) => (
                    <Col className="col-convert-type" key={index} span={8}>
                        <div
                            role="button"
                            className={`sal-opt-wrap ${salaryState.convertType === item.title && "sal-opt-wrap-active"} convert-type-opt`}
                            onClick={() => handleConvertType(item?.title)}
                        >
                            <span>{item.title}</span>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
        </>
    )
}

const AmountWrap = ({salaryState, setSalaryState}) => {
    const ref_input = useRef();
    const location = useLocation();
    const history = useHistory();
    const [valueInput, setValueInput] = useState('0');

    const [amountState, setAmountState] = useState({
        currency: "VND",
        iconCurrency: ensignVN2,
        amountCurrent: 0,
    });

    const handleTypeChange = (value) => {
        setValueInput(value)
    }

    const handleChangeCurrency = (value) => {
        if(location.search) {
            let currentParams = qs.parse(location.search);
            // currentParams["amount"] = amountState.amountCurrent;
            currentParams["currency"] = value;
            // currentParams["calcType"] = salaryState.calcType;
            // currentParams["employmentType"] = salaryState.employmentType;

            history.push({
                pathname: '/services/salary/',
                search: `?${qs.stringify(currentParams)}`
            })
        } else {
            let element = UI_Data.amountTypes.find(item => item.title === value);
            // let amount = convertToVND(value, amountState.amountCurrent);

            // //console.log("amount in currency: ", amount)
            setAmountState({
                ...amountState,
                currency: value,
                iconCurrency: element.activeIcon
            });
            
            // setSalaryState((state) => ({...state, gross: amount}));
        }
        
    }

    const handlePressEnter = (value) => {
        let converted_value = parseFloat(value.replaceAll(",", ""));

        
            let currentParams = qs.parse(location.search);
            currentParams["amount"] = converted_value;
            currentParams["currency"] = amountState.currency;
            currentParams["calcType"] = salaryState.calcType;
            currentParams["employmentType"] = salaryState.employmentType;
            currentParams["forType"] = salaryState.forType;
            currentParams["billCurrency"] = salaryState.billCurrency;

            history.push({
                pathname: '/services/salary/',
                search: `?${qs.stringify(currentParams)}`
            })
        
            // //console.log("value for caculate: ", value);
            // //console.log(value.replaceAll(",", ""));
            
            // let amount = convertToVND(amountState.currency, converted_value);
            // //console.log("amount: ", amount);
            //setAmountState({...amountState, amountCurrent: converted_value})
            // setSalaryState((state) => ({...state, gross: amount}));
    }

    useEffect(() => {
        if(location.search) {
            let params = qs.parse(location.search);
            let element = UI_Data.amountTypes.find(item => item.title === params['currency']);

            if(params['amount'] && params["currency"]) {

                setValueInput(parseInt(params["amount"]))
                setAmountState({
                    amountCurrent: parseInt(params["amount"]),
                    currency: params["currency"],
                    iconCurrency: element.activeIcon
                })
            }
        } 
        // else {

        //     let element = UI_Data.amountTypes.find(item => item.title === amountState.currency);
    
        //     setAmountState({
        //         ...amountState,
        //         iconCurrency: element.activeIcon
        //     })
        // }
    }, [location.search])


    return (
        <div className="left-wrap amount-wrap">
            <label>Amount</label>
            <Row className="row-amount" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                <Col xs={9} sm={8}>
                    <div className="sal-opt-wrap-active money-unit">
                        <div className="select-unit">
                            <img src={amountState.iconCurrency} alt="icon unit" />
                            <Select
                                className="select"
                                value={amountState.currency}
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
                        <InputNumber 
                            defaultValue={0}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            placeholder="Enter your salary"
                            bordered={false}
                            onPressEnter={(e) => handlePressEnter(e.target.value)}
                            onChange={(value) => handleTypeChange(value)}
                            value={valueInput}
                            ref={ref_input}
                        />
                        {/* <Statistic value={summarySate.amount} precision={2} /> */}
                    </div>
                </Col>
            </Row>
            <button className="btn-caculate" onClick={() => handlePressEnter(ref_input.current.value)}>Active</button>
        </div>
    )
}

const RightBillWrap = ({salaryState, setSalaryState}) => {
    const [billState, setBill] = useState({
        forType: "for employer",
        currency: "VND",
        amount: 0,
        caculateData: null,
        overview: null,
        input: 0,
    })
    const location = useLocation();
    const history = useHistory();
    
    //console.log("state: ", salaryState)

    const forTypeClassifier = (type, data) => {
        if(type === "for employee") return data.forEmployee;
        else if (type === "for employer") return data.forEmployer;
    }

    const handleChangeForType = (type) => {
        // let overview = forTypeClassifier(type, billState.caculateData).map(item => {
        //     let temp = {...item};
        //     temp.amount = convertExchangeRate(billState.currency, item.amount);
        //     return temp;
        // });

        if(location.search) {
            let currentParams = qs.parse(location.search);
            currentParams["forType"] = type;

            history.push({
                pathname: '/services/salary/',
                search: `?${qs.stringify(currentParams)}`
            })

        } else {
            setSalaryState((salaryState) => ({ ...salaryState, forType: type}))
            // setBill({ ...billState, forType: type, overview: overview });
        }
        
        
    }

    const handleChangeCurrency = (type) => {
        // let overview = forTypeClassifier(billState.forType, billState.caculateData).map(item => {
        //     let temp = {...item};
        //     temp.amount = convertExchangeRate(type, item.amount);
        //     return temp;
        // });

        // setBill({ ...billState, currency: type, overview: overview, amount: overview[0].amount });

        if(location.search) {
            let currentParams = qs.parse(location.search);
            currentParams["billCurrency"] = type;

            history.push({
                pathname: '/services/salary/',
                search: `?${qs.stringify(currentParams)}`
            })

        } else {
            setSalaryState((salaryState) => ({ ...salaryState, billCurrency: type}))
            // setBill({ ...billState, forType: type, overview: overview });
        }
    }


    useEffect(() => {
        if(location.search) {
            let params = qs.parse(location.search);
            let gross = convertToVND(params["currency"], parseFloat(params["amount"]));
            let caculateData = salaryCaculator(gross, params["calcType"], params["employmentType"]);

            //console.log("RES: ", caculateData);

            let overview = forTypeClassifier(params["forType"], caculateData).map(item => {
                let temp = {...item};
                temp.amount = convertExchangeRate(params["billCurrency"], item.amount);
                return temp;
            });

            // //console.log("overview", overview);
    
            setBill((billState) => ({
                ...billState,
                forType: params["forType"],
                currency: params["billCurrency"],
                amount: overview[0].amount,
                overview: overview,
                caculateData: caculateData,
                input: params["amount"]
            }))
        }
    }, [location.search])

    return (
        <div className="right-wrap right-bill-wrap">
            <Row className="row-for-type" gutter={[{ xs: 21, sm: 24, xl: 30 }, 0]}>
                {UI_Data?.forTypes?.map((opt, index) => (
                    <Col key={index} xs={12} sm={10}>
                        <div
                            role="button"
                            className={`sal-opt-wrap ${salaryState?.forType === opt && 'sal-opt-wrap-active'} for-type-wrap`}
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
                                {salaryState?.billCurrency === aType?.title
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
                <p>{`Breakdown for ${salaryState?.calcType}`}</p>
                <div className="wrap-value">
                    <span>{salaryState?.billCurrency}&nbsp;</span>
                    <Statistic value={billState.input} precision={2} />
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
                            {salaryState.billCurrency}&nbsp;
                            <Statistic value={item.amount} precision={2} />
                        </Descriptions.Item>
                    ))}
                </Descriptions>
            </div>
        </div>
    )
}

export default Salary