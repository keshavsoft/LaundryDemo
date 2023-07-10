let StartFunc = () => {
    let jVarNettAmount = jFLocalFromDomNettAmountId();
    let jVarRoundOff = jFLocalFromDomRoundOffId();
    jFLocalToInnerHtmlCashAmountId({ injVarCashAmount: parseFloat(jVarNettAmount) + parseFloat(jVarRoundOff)});
};

let jFLocalFromDomNettAmountId = () => {
    let jVarLocalHtmlNettAmountId = 'NettAmountId';
   let jVarHtmlNettAmountId = document.getElementById(jVarLocalHtmlNettAmountId);
   let jVarHtmlNettAmountIdValue = jVarHtmlNettAmountId.value;
   return jVarHtmlNettAmountIdValue;
};

let jFLocalFromDomRoundOffId = () => {
    let jVarLocalHtmlRoundOffId = 'RoundOffId';
   let jVarHtmlRoundOffId = document.getElementById(jVarLocalHtmlRoundOffId);
   let jVarHtmlRoundOffIdValue = jVarHtmlRoundOffId.value;
   return jVarHtmlRoundOffIdValue;
};

let jFLocalToInnerHtmlCashAmountId = ({ injVarCashAmount }) => {
    let jVarLocalHtmlId = 'CashAmountId';
   let jVarLocalCashAmountId = document.getElementById(jVarLocalHtmlId);
   jVarLocalCashAmountId.value = injVarCashAmount;
};




export { StartFunc };