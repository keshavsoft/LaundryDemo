let StartFunc = () => {
    let jVarLocalCashAmount = parseInt(jFLocalCashAmountId()) || 0;
    let jVarLocalCardAmount = parseInt(jFLocalCardAmountId()) || 0;
    let jVarLocalUPIAmount = parseInt(jFLocalUPIAmountId()) || 0;
    let jVarLocalOrderAmount = parseInt(jFLocalOrderAmountId()) || 0;
    let jVarLocalRoundOffAmount = parseFloat(jFLocalFromDomRoundOffId()) || 0;
    let jVarLocalDiscountAmount = parseFloat(jFLocalFromDomDiscountId()) || 0;
    let jVarLocalNettAmount = parseFloat(jFLocalFromDomNettAmountId()) || 0;
    let jVarLocalCheckAmount = jVarLocalCashAmount + jVarLocalCardAmount + jVarLocalUPIAmount;

    jFLocalReturnHTMLControlForDiscountId().classList.remove("is-invalid");

    if (jVarLocalDiscountAmount > 10) {
        jFLocalReturnHTMLControlForDiscountId().focus();
        jFLocalReturnHTMLControlForDiscountId().classList.add("is-invalid");
        return false;
    };

    if (jVarLocalCheckAmount === jVarLocalNettAmount + jVarLocalRoundOffAmount === false) {
        if (jVarLocalCashAmount > 0) {
            if (jVarLocalCardAmount > 0) {
                jFLocalReturnHTMLControlForUPIAmountId().focus();
                jFLocalReturnHTMLControlForUPIAmountId().classList.add("is-invalid");
                jFLocalReturnHTMLControlForCardAmountId().classList.remove("is-invalid");
                jFLocalReturnHTMLControlForCashAmountId().classList.remove("is-invalid");
            }
            else {
                jFLocalReturnHTMLControlForCardAmountId().focus();
                jFLocalReturnHTMLControlForCardAmountId().classList.add("is-invalid")
                jFLocalReturnHTMLControlForCashAmountId().classList.remove("is-invalid");
                jFLocalReturnHTMLControlForUPIAmountId().classList.remove("is-invalid");
            };
        }
        else if (jVarLocalCardAmount > 0) {
            if (jVarLocalCashAmount > 0) {
                jFLocalReturnHTMLControlForUPIAmountId().focus();
                jFLocalReturnHTMLControlForUPIAmountId().classList.add("is-invalid");
                jFLocalReturnHTMLControlForCashAmountId().classList.remove("is-invalid");
                jFLocalReturnHTMLControlForCardAmountId().classList.remove("is-invalid");
            }
            else {
                jFLocalReturnHTMLControlForCashAmountId().focus();
                jFLocalReturnHTMLControlForCashAmountId().classList.add("is-invalid");
                jFLocalReturnHTMLControlForCardAmountId().classList.remove("is-invalid");
                jFLocalReturnHTMLControlForUPIAmountId().classList.remove("is-invalid");
            };
        }
        else if (jVarLocalUPIAmount > 0) {
            if (jVarLocalCashAmount > 0) {
                jFLocalReturnHTMLControlForCardAmountId().focus();
                jFLocalReturnHTMLControlForCardAmountId().classList.add("is-invalid")
                jFLocalReturnHTMLControlForCashAmountId().classList.remove("is-invalid");
                jFLocalReturnHTMLControlForUPIAmountId().classList.remove("is-invalid");
            }
            else {
                jFLocalReturnHTMLControlForCashAmountId().focus();
                jFLocalReturnHTMLControlForCashAmountId().classList.add("is-invalid");
                jFLocalReturnHTMLControlForUPIAmountId().classList.remove("is-invalid");
                jFLocalReturnHTMLControlForCardAmountId().classList.remove("is-invalid");
            };
        }
        else {
            jFLocalReturnHTMLControlForCashAmountId().focus();
            jFLocalReturnHTMLControlForCashAmountId().classList.add("is-invalid");
            jFLocalReturnHTMLControlForCardAmountId().classList.remove("is-invalid");
            jFLocalReturnHTMLControlForUPIAmountId().classList.remove("is-invalid");
        };

        return false;
    };
    jFLocalReturnHTMLControlForCashAmountId().classList.remove("is-invalid");
    jFLocalReturnHTMLControlForCardAmountId().classList.remove("is-invalid");
    jFLocalReturnHTMLControlForUPIAmountId().classList.remove("is-invalid");
    return true;
};

let jFLocalReturnHTMLControlForCashAmountId = () => {
    let jVarLocalHtmlCashAmountId = 'CashAmountId';
    let jVarHtmlCashAmountId = document.getElementById(jVarLocalHtmlCashAmountId);
    return jVarHtmlCashAmountId;
};

let jFLocalReturnHTMLControlForCardAmountId = () => {
    let jVarLocalHtmlCardAmountId = 'CardAmountId';
    let jVarHtmlCardAmountId = document.getElementById(jVarLocalHtmlCardAmountId);
    return jVarHtmlCardAmountId;
};

let jFLocalReturnHTMLControlForUPIAmountId = () => {
    let jVarLocalHtmlUPIAmountId = 'UPIAmountId';
    let jVarHtmlUPIAmountId = document.getElementById(jVarLocalHtmlUPIAmountId);
    return jVarHtmlUPIAmountId;
};

let jFLocalCashAmountId = () => {
    let jVarLocalHtmlCashAmountId = 'CashAmountId';
    let jVarHtmlCashAmountId = document.getElementById(jVarLocalHtmlCashAmountId);
    let jVarHtmlCashAmountIdValue = jVarHtmlCashAmountId.value.trim();
    return jVarHtmlCashAmountIdValue;
};

let jFLocalFromDomRoundOffId = () => {
    let jVarLocalHtmlRoundOffId = 'RoundOffId';
    let jVarHtmlRoundOffId = document.getElementById(jVarLocalHtmlRoundOffId);
    let jVarHtmlRoundOffIdValue = jVarHtmlRoundOffId.value.trim();
    return jVarHtmlRoundOffIdValue;
};

let jFLocalFromDomNettAmountId = () => {
    let jVarLocalHtmlNettAmountId = 'NettAmountId';
    let jVarHtmlNettAmountId = document.getElementById(jVarLocalHtmlNettAmountId);
    let jVarHtmlNettAmountIdValue = jVarHtmlNettAmountId.value.trim();
    return jVarHtmlNettAmountIdValue;
};

let jFLocalReturnHTMLControlForDiscountId = () => {
    let jVarLocalHtmlDiscountId = 'DiscountPerId';
    let jVarHtmlDiscountId = document.getElementById(jVarLocalHtmlDiscountId);
    return jVarHtmlDiscountId;
};

let jFLocalCardAmountId = () => {
    let jVarLocalHtmlCardAmountId = 'CardAmountId';
    let jVarHtmlCardAmountId = document.getElementById(jVarLocalHtmlCardAmountId);
    let jVarHtmlCardAmountIdValue = jVarHtmlCardAmountId.value.trim();
    return jVarHtmlCardAmountIdValue;
};

let jFLocalUPIAmountId = () => {
    let jVarLocalHtmlUPIAmountId = 'UPIAmountId';
    let jVarHtmlUPIAmountId = document.getElementById(jVarLocalHtmlUPIAmountId);
    let jVarHtmlUPIAmountIdValue = jVarHtmlUPIAmountId.value.trim();
    return jVarHtmlUPIAmountIdValue;
};

let jFLocalOrderAmountId = () => {
    let jVarLocalHtmlOrderAmountId = 'OrderAmountId';
    let jVarHtmlOrderAmountId = document.getElementById(jVarLocalHtmlOrderAmountId);
    let jVarHtmlOrderAmountIdValue = jVarHtmlOrderAmountId.innerHTML;
    return jVarHtmlOrderAmountIdValue;
};

let jFLocalFromDomDiscountId = () => {
    let jVarLocalHtmlDiscountId = 'DiscountPerId';
    let jVarHtmlDiscountId = document.getElementById(jVarLocalHtmlDiscountId);
    let jVarHtmlDiscountIdValue = jVarHtmlDiscountId.value.trim();
    return jVarHtmlDiscountIdValue;
};

export { StartFunc };