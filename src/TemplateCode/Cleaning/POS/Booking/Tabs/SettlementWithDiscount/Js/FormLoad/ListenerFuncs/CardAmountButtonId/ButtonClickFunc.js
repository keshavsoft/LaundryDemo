let StartFunc = () => {
    let jVarNettAmount = jFLocalFromDomNettAmountId();
    let jVarRoundOff = jFLocalFromDomRoundOffId();
    jFLocalToInnerHtmlCardAmountId({ injVarCardAmount: parseFloat(jVarNettAmount) + parseFloat(jVarRoundOff)});
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

let jFLocalToInnerHtmlCardAmountId = ({ injVarCardAmount }) => {
    let jVarLocalHtmlId = 'CardAmountId';
   let jVarLocalCardAmountId = document.getElementById(jVarLocalHtmlId);
   jVarLocalCardAmountId.value = injVarCardAmount;
};




export { StartFunc };