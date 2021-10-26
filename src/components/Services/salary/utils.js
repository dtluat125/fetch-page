const EXCHANGE_RATE_USD = 23296;
const EXCHANGE_RATE_SGD = 16798;

const taxData = {
    forEmployer: { si: 17.5, hi: 3, ui: 1, tu: 2, pvi: 250000 },
    taxDeductions: { self: 11000000, dependent: 0, si: 8, hi: 1.5, ui: 1 }
}

export const convertExchangeRate = (rateType, salary) => {
    if(rateType === "VND") return salary;
    else if(rateType === "USD") return salary/EXCHANGE_RATE_USD;
    else if(rateType === "SGD") return salary/EXCHANGE_RATE_SGD;
}

export const convertToVND = (rateType, salary) => {
    if(rateType === "VND") return salary;
    else if(rateType === "USD") return salary*EXCHANGE_RATE_USD;
    else if(rateType === "SGD") return salary*EXCHANGE_RATE_SGD;
}

const checkFromGross = (gross, netCheck) => {
    let selfTD = taxData.taxDeductions.self;
    let dependentTD = taxData.taxDeductions.dependent;
    let SI_TD = gross < 29.8 * 10**6 ? gross * (taxData.taxDeductions.si * 0.01) : 29.8 * 10**6 * (taxData.taxDeductions.si * 0.01);
    let HI_TD = gross < 29.8 * 10**6 ? gross * (taxData.taxDeductions.hi * 0.01) : 29.8 * 10**6 * (taxData.taxDeductions.hi * 0.01);
    let UI_TD = gross * (taxData.taxDeductions.ui * 0.01);

    let temp = gross - (selfTD + dependentTD + SI_TD + HI_TD + UI_TD)
    let taxableIncome = temp > 0 ? temp : 0; 

    let PIT = 0;
    if (taxableIncome <= 5 * 10**6) PIT = taxableIncome*5*0.01
    else if ((5 * 10**6 < taxableIncome) && (taxableIncome <= 10 * 10**6)) PIT = taxableIncome*10*0.01 - 0.25*10**6;
    else if ((10 * 10**6 < taxableIncome) && (taxableIncome <= 18 * 10**6)) PIT = taxableIncome*15*0.01 - 0.75*10**6;
    else if ((18 * 10**6 < taxableIncome) && (taxableIncome <= 32 * 10**6)) PIT = taxableIncome*20*0.01 - 1.65*10**6;
    else if ((32 * 10**6 < taxableIncome) && (taxableIncome <= 52 * 10**6)) PIT = taxableIncome*25*0.01 - 3.25*10**6;
    else if ((52 * 10**6 < taxableIncome) && (taxableIncome <= 80 * 10**6)) PIT = taxableIncome*30*0.01 - 5.85*10**6;
    else if (80 * 10**6 < taxableIncome) PIT = taxableIncome*35*0.01 - 9.85*10**6;

    let bringHome = gross - PIT - SI_TD - HI_TD - UI_TD;

    // console.log(`${netCheck} - ${bringHome} = ${netCheck - bringHome}`);
    return Math.abs(netCheck - bringHome);
}

const checkTotalFromGross = (gross, totalCheck) => {
    let SI = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.si * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.si * 0.01);
    let HI = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.hi * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.hi * 0.01);
    let UI = gross < 83.6 * 10**6 ? gross * (taxData.forEmployer.ui * 0.01) : 83.6 * 10**6 * (taxData.forEmployer.ui * 0.01);
    let TU = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.tu * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.tu * 0.01);
    let PVI = taxData.forEmployer.pvi;

    let totalExpenses = gross + SI + HI + UI + TU + PVI;

    // console.log(`${totalCheck} - ${totalExpenses} = ${totalCheck - totalExpenses}`);
    return Math.abs(totalCheck - totalExpenses);
}

const convertFromGross = (gross, emplType) => {
    
    if(emplType !== "freelance") {
        // console.log("in 1")
        if(gross === 0) {
            return {
                forEmployer: [
                    { id: 1, title: 'Gross salary', amount: 0},
                    { id: 2, title: "Social insurance", percent: taxData.forEmployer.si, amount: 0 },
                    { id: 3, title: "Health insurance", percent: taxData.forEmployer.hi, amount: 0 },
                    { id: 4, title: "Unemployed insurance", percent: taxData.forEmployer.ui, amount: 0 },
                    { id: 5, title: "Union tax", percent: taxData.forEmployer.tu, amount: 0 },
                    { id: 6, title: "PVI healthcare", amount: 0 },
                    { id: 7, title: "NET", amount: 0 },
                    { id: 8, title: "Total expenses", amount: 0 }
                ],
                forEmployee: [
                    { id: 1, title: 'Gross salary', amount: 0},
                    { id: 2, title: "Social insurance", percent: taxData.taxDeductions.si, amount: 0},
                    { id: 3, title: "Health insurance", percent: taxData.taxDeductions.hi, amount: 0 },
                    { id: 4, title: "Unemployed insurance", percent: taxData.taxDeductions.ui, amount: 0 },
                    { id: 5, title: "Tax deductions", amount: 0 },
                    { id: 6, title: "Personal income tax", amount: 0},
                    { id: 7, title: "NET", amount: 0 }
                ]
            }
        }

        let SI = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.si * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.si * 0.01);
        let HI = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.hi * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.hi * 0.01);
        let UI = gross < 83.6 * 10**6 ? gross * (taxData.forEmployer.ui * 0.01) : 83.6 * 10**6 * (taxData.forEmployer.ui * 0.01);
        let TU = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.tu * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.tu * 0.01);
        let PVI = taxData.forEmployer.pvi;
    
        let totalExpenses = gross + SI + HI + UI + TU + PVI;
    
        let selfTD = taxData.taxDeductions.self;
        let dependentTD = taxData.taxDeductions.dependent;
        let SI_TD = gross < 29.8 * 10**6 ? gross * (taxData.taxDeductions.si * 0.01) : 29.8 * 10**6 * (taxData.taxDeductions.si * 0.01);
        let HI_TD = gross < 29.8 * 10**6 ? gross * (taxData.taxDeductions.hi * 0.01) : 29.8 * 10**6 * (taxData.taxDeductions.hi * 0.01);
        let UI_TD = gross * (taxData.taxDeductions.ui * 0.01);
    
        let temp = gross - (selfTD + dependentTD + SI_TD + HI_TD + UI_TD)
        let taxableIncome = temp > 0 ? temp : 0; 
    
        let PIT = 0;
        if (taxableIncome <= 5 * 10**6) PIT = taxableIncome*5*0.01
        else if ((5 * 10**6 < taxableIncome) && (taxableIncome <= 10 * 10**6)) PIT = taxableIncome*10*0.01 - 0.25*10**6;
        else if ((10 * 10**6 < taxableIncome) && (taxableIncome <= 18 * 10**6)) PIT = taxableIncome*15*0.01 - 0.75*10**6;
        else if ((18 * 10**6 < taxableIncome) && (taxableIncome <= 32 * 10**6)) PIT = taxableIncome*20*0.01 - 1.65*10**6;
        else if ((32 * 10**6 < taxableIncome) && (taxableIncome <= 52 * 10**6)) PIT = taxableIncome*25*0.01 - 3.25*10**6;
        else if ((52 * 10**6 < taxableIncome) && (taxableIncome <= 80 * 10**6)) PIT = taxableIncome*30*0.01 - 5.85*10**6;
        else if (80 * 10**6 < taxableIncome) PIT = taxableIncome*35*0.01 - 9.85*10**6;
    
        let bringHome = gross - PIT - SI_TD - HI_TD - UI_TD;
    
        return {
            forEmployer: [
                { id: 1, title: 'Gross salary', amount: gross},
                { id: 2, title: "Social insurance", percent: taxData.forEmployer.si, amount: SI },
                { id: 3, title: "Health insurance", percent: taxData.forEmployer.hi, amount: HI },
                { id: 4, title: "Unemployed insurance", percent: taxData.forEmployer.ui, amount: UI },
                { id: 5, title: "Union tax", percent: taxData.forEmployer.tu, amount: TU },
                { id: 6, title: "PVI healthcare", amount: taxData.forEmployer.pvi },
                { id: 7, title: "NET", amount: bringHome },
                { id: 8, title: "Total expenses", amount: totalExpenses }
            ],
            forEmployee: [
                { id: 1, title: 'Gross salary', amount: gross},
                { id: 2, title: "Social insurance", percent: taxData.taxDeductions.si, amount: SI_TD},
                { id: 3, title: "Health insurance", percent: taxData.taxDeductions.hi, amount: HI_TD },
                { id: 4, title: "Unemployed insurance", percent: taxData.taxDeductions.ui, amount: UI_TD },
                { id: 5, title: "Tax deductions", amount: (selfTD + dependentTD + SI_TD + HI_TD + UI_TD)},
                { id: 6, title: "Personal income tax", amount: PIT},
                { id: 7, title: "NET", amount: bringHome }
            ]
        }
    } else {
        // console.log("in 2")
        if(gross === 0) {
            return {
                forEmployer: [
                    { id: 1, title: 'Gross salary', amount: 0},
                    { id: 2, title: "Social insurance", amount: 0 },
                    { id: 3, title: "Health insurance", amount: 0 },
                    { id: 4, title: "Unemployed insurance", amount: 0 },
                    { id: 5, title: "Union tax", amount: 0 },
                    { id: 6, title: "PVI healthcare", amount: 0 },
                    { id: 7, title: "NET", amount: 0 },
                    { id: 8, title: "Total expenses", amount: 0 }
                ],
                forEmployee: [
                    { id: 1, title: 'Gross salary', amount: 0 },
                    { id: 2, title: "Social insurance", amount: 0 },
                    { id: 3, title: "Health insurance", amount: 0 },
                    { id: 4, title: "Unemployed insurance", amount: 0 },
                    { id: 5, title: "Tax deductions", amount: 0 },
                    { id: 6, title: "Personal income tax", percent: 10, amount: 0 },
                    { id: 7, title: "NET", amount: 0 }
                ]
            }
        }
        return {
            forEmployer: [
                { id: 1, title: 'Gross salary', amount: gross},
                { id: 2, title: "Social insurance", amount: 0 },
                { id: 3, title: "Health insurance", amount: 0 },
                { id: 4, title: "Unemployed insurance", amount: 0 },
                { id: 5, title: "Union tax", amount: 0 },
                { id: 6, title: "PVI healthcare", amount: 0 },
                { id: 7, title: "NET", amount: gross*(1 - 0.1) },
                { id: 8, title: "Total expenses", amount: gross }
            ],
            forEmployee: [
                { id: 1, title: 'Gross salary', amount: gross },
                { id: 2, title: "Social insurance", amount: 0 },
                { id: 3, title: "Health insurance", amount: 0 },
                { id: 4, title: "Unemployed insurance", amount: 0 },
                { id: 5, title: "Tax deductions", amount: 0 },
                { id: 6, title: "Personal income tax", percent: 10, amount: 0.1*gross },
                { id: 7, title: "NET", amount: gross*(1 - 0.1) }
            ]
        }
    }
}

export const salaryCaculator = (salary, calcType, emplType) => {

    if(salary <= 0) return convertFromGross(0 , emplType);

    if(calcType === "gross pay") {
        return convertFromGross(salary, emplType);
    } else if (calcType === "net pay") {
        // < 29.8;
        let percentTax = 0.01*(taxData.taxDeductions.si + taxData.taxDeductions.hi + taxData.taxDeductions.ui);
        let percentTax_2 = 0.01*(taxData.taxDeductions.si + taxData.taxDeductions.hi);
        let percentTax_3 = 0.01*taxData.taxDeductions.ui;
        let tax_self_dep = taxData.taxDeductions.self + taxData.taxDeductions.dependent;

        let cor = [
            {A: 0.05, B: 0},
            {A: 0.10, B: 0.25*10**6},
            {A: 0.15, B: 0.75*10**6},
            {A: 0.20, B: 1.65*10**6},
            {A: 0.25, B: 3.25*10**6},
            {A: 0.30, B: 5.85*10**6},
            {A: 0.35, B: 9.85*10**6},
        ]

        //gross = (1.0*salary - A*11*10**6 - B) / (1 - A + (A - 1)*(a + b + c))
        
        let gross1_0 = (1.0*salary) / (1 - percentTax);
        let temp_1 = cor.map(item => (1.0*salary - item.A*11*10**6 - item.B) / (1 - item.A + (item.A - 1)*percentTax))

        // >= 29.8;
        //gross = (1.0*salary - A*11*10**6 - B - (A - 1)*29.8*10**6 * (a+b)) / (1 - A + (A - 1)*c)

        let gross2_0 = (1.0*salary + 29.8*10**6 * percentTax_2) / (1 - percentTax_3);
        let temp_2 = cor.map(item => (1.0*salary - item.A*11*10**6 - item.B - (item.A - 1)*29.8*10**6 * percentTax_2) / (1 - item.A + (item.A - 1)*percentTax_3))
        
        let result = [gross1_0, ...temp_1, gross2_0, ...temp_2];
        // console.log("ARR: ", result.map(i => checkFromGross(i, salary)));

        let index = 0;
        for(let i = 1; i < result.length; i += 1) {
            if (checkFromGross(result[i], salary) < checkFromGross(result[index], salary)) {
                index = i;
            }
        }
        // console.log("index: ", index);

        return convertFromGross(result[index], emplType);

    } else if(calcType === "total") {
        
        let percentTax = 0.01*(taxData.forEmployer.si + taxData.forEmployer.hi + taxData.forEmployer.ui + taxData.forEmployer.tu);
        let percentTax2_4 = 0.01*(taxData.forEmployer.si + taxData.forEmployer.hi + taxData.forEmployer.tu);
        let percentTax_3 = 0.01*(taxData.forEmployer.ui);

        let pvi = taxData.forEmployer.pvi;

        // < 29.6;
        let gross1_0 = (1.0*salary - pvi) / (1 +  percentTax);

        // >= 29.6;
        let gross2_0 = (1.0*salary - pvi - 29.8*10**6 * percentTax2_4) / (1 + percentTax_3);
        let gross2_1 = 1.0*salary - pvi - 83.6*10**6 * percentTax_3 - 29.8*10**6 * percentTax2_4;

        let result = [gross1_0, gross2_0, gross2_1];

        // console.log("ARR: ", result.map(i => checkTotalFromGross(i, salary)));

        let index = 0;
        for(let i = 1; i < result.length; i += 1) {
            if (checkTotalFromGross(result[i], salary) < checkTotalFromGross(result[index], salary)) {
                index = i;
            }
        }
        // console.log("index: ", index);

        return convertFromGross(result[index], emplType);
    }
}