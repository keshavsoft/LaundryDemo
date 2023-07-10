let StartFunc = () => {
    let jVarNettAmount = jFLocalFromDomNettAmountId();
    let jVarRoundOff = jFLocalFromDomRoundOffId();
    jFLocalToInnerHtmlUPIAmountId({ injVarUPIAmount: parseFloat(jVarNettAmount) + parseFloat(jVarRoundOff)});
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

let jFLocalToInnerHtmlUPIAmountId = ({ injVarUPIAmount }) => {
    let jVarLocalHtmlId = 'UPIAmountId';
   let jVarLocalUPIAmountId = document.getElementById(jVarLocalHtmlId);
   jVarLocalUPIAmountId.value = injVarUPIAmount;
};




export { StartFunc };