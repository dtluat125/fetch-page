const EXCHANGE_RATE_USD = 23296;
const EXCHANGE_RATE_SGD = 16798;

const taxData = {
    forEmployer: { si: 17.5, hi: 3, ui: 1, tu: 2, pvi: 250000 },
    taxDeductions: { self: 11000000, dependent: 4400000, si: 8, hi: 1.5, ui: 1 }
}

export const convertExchangeRate = (rateType, salary) => {
    if(rateType === "VND") return salary;
    else if(rateType === "USD") return salary/EXCHANGE_RATE_USD;
    else if(rateType === "SGD") return salary/EXCHANGE_RATE_SGD;
}

export const salaryCaculator = (gross) => {
    let SI = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.si * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.si * 0.01);
    let HI = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.hi * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.hi * 0.01);
    let UI = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.ui * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.hi * 0.01);
    let TU = gross < 29.8 * 10**6 ? gross * (taxData.forEmployer.tu * 0.01) : 29.8 * 10**6 * (taxData.forEmployer.hi * 0.01);
    let PVI = taxData.forEmployer.pvi;

    let totalExpenses = gross + SI + HI + UI + TU + PVI;

    let selfTD = taxData.taxDeductions.self;
    let dependentTD = taxData.taxDeductions.dependent;
    let SI_TD = gross < 29.8 * 10**6 ? gross * (taxData.taxDeductions.si * 0.01) : 29.8 * 10**6 * (taxData.taxDeductions.si * 0.01);
    let HI_TD = gross < 29.8 * 10**6 ? gross * (taxData.taxDeductions.hi * 0.01) : 29.8 * 10**6 * (taxData.taxDeductions.hi * 0.01);
    let UI_TD = gross < 29.8 * 10**6 ? gross * (taxData.taxDeductions.ui * 0.01) : 29.8 * 10**6 * (taxData.taxDeductions.hi * 0.01);

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
}