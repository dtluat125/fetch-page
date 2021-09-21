const EXCHANGE_RATE_VND = 1;
const EXCHANGE_RATE_USD = 23296;
const EXCHANGE_RATE_SGD = 16798;

export const convertExchangeRate = (rateType, salary) => {

    if(rateType === "VND") return 1.0*salary/EXCHANGE_RATE_VND;
    else if(rateType === "USD") return 1.0*salary/EXCHANGE_RATE_USD;
    else if(rateType === "SGD") return 1.0*salary/EXCHANGE_RATE_SGD
}

export const salaryCaculator = (gross, data) => {
    let SI = gross < 29.8 * 10**6 ? gross * (data.si * 0.01) : 29.8 * 10**6 * (data.si * 0.01);
    let HI = gross < 29.8 * 10**6 ? gross * (data.hi * 0.01) : 29.8 * 10**6 * (data.hi * 0.01);
    let UI = gross < 29.8 * 10**6 ? gross * (data.ui * 0.01) : 29.8 * 10**6 * (data.hi * 0.01);
    let TU = gross < 29.8 * 10**6 ? gross * (data.tu * 0.01) : 29.8 * 10**6 * (data.hi * 0.01);
    let PVI = data.pvi;

    let totalExpenses = gross + SI + HI + UI + TU + PVI;

    let selfTD = data.taxDeductions.self;
    let dependentTD = data.taxDeductions.dependent;
    let SI_TD = gross < 29.8 * 10**6 ? gross * (data.taxDeductions.si * 0.01) : 29.8 * 10**6 * (data.taxDeductions.si * 0.01);
    let HI_TD = gross < 29.8 * 10**6 ? gross * (data.taxDeductions.hi * 0.01) : 29.8 * 10**6 * (data.taxDeductions.hi * 0.01);
    let UI_TD = gross < 29.8 * 10**6 ? gross * (data.taxDeductions.ui * 0.01) : 29.8 * 10**6 * (data.taxDeductions.hi * 0.01);

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
        forEmployer: {
            SI: SI,
            HI: HI,
            UI: UI,
            TU: TU,
            PVI: PVI,
            NET: bringHome,
            totalExpenses: totalExpenses,
        },
        forEmployee: {
            SI: SI_TD,
            HI: HI_TD,
            UI: UI_TD,
            PIT: PIT,
            NET: bringHome,
            taxDeductions: (selfTD + dependentTD + SI_TD + HI_TD + UI_TD)
        }
    }
}