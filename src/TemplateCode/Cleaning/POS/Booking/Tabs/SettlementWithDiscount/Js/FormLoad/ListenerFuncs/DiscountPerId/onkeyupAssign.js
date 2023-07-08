let jVarLocalShowButtonClass = document.getElementById("DiscountPerId");

let StartFunc = () => {
    console.log("jVarLocalShowButtonClass : ", jVarLocalShowButtonClass);
    jVarLocalShowButtonClass.addEventListener("keyup", processChange);
};

const processChange = debounce(() => saveInput());

function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
function saveInput() {
    let jVarLocalOrderAmount = jFLocalFromDomOrderAmountId();
    let jVarLocalDiscountAmountId = document.getElementById("DiscountAmountId");

    jVarLocalDiscountAmountId.value = (jVarLocalOrderAmount * ((100 - jVarLocalShowButtonClass.value) / 100)).toFixed(2);

    jFLocalCgstAmountId({ inCgstAmountId: ((jVarLocalOrderAmount - jVarLocalDiscountAmountId.value) * 5 / 100).toFixed(2) });
    jFLocalSgstAmountId({ inSgstAmountId: ((jVarLocalOrderAmount - jVarLocalDiscountAmountId.value) * 5 / 100).toFixed(2) });
    jFShowNettAmount();
};

let jFShowNettAmount = () => {
    let jVarLocalAfterDiscount = jFLocalFromDomDiscountAmountId();
    let jVarLocalSgstAmountId = jFLocalFromDomSgstAmountId();
    let jVarLocalCgstAmountId = jFLocalFromDomCgstAmountId();

    jFLocalNettAmountId({ inNettAmountId: parseFloat(jVarLocalAfterDiscount) + parseFloat(jVarLocalSgstAmountId) + parseFloat(jVarLocalCgstAmountId) });
    let jVarLocalNettAmount = parseFloat(jFLocalFromDomNettAmountId());

    jFLocalToInputRoundOffId({ inRoundOffId: (Math.round(jVarLocalNettAmount) - jVarLocalNettAmount).toFixed(2) });
};

let jFLocalFromDomNettAmountId = () => {
    let jVarLocalHtmlNettAmountId = 'NettAmountId';
    let jVarHtmlNettAmountId = document.getElementById(jVarLocalHtmlNettAmountId);
    let jVarHtmlNettAmountIdValue = jVarHtmlNettAmountId.value.trim();
    return jVarHtmlNettAmountIdValue;
};

let jFLocalToInputRoundOffId = ({ inRoundOffId }) => {
    let jVarLocalHtmlId = 'RoundOffId';
    let jVarLocalRoundOffId = document.getElementById(jVarLocalHtmlId);
    jVarLocalRoundOffId.value = inRoundOffId;
};

let jFLocalFromDomSgstAmountId = () => {
    let jVarLocalHtmlSgstAmountId = 'SgstAmountId';
    let jVarHtmlSgstAmountId = document.getElementById(jVarLocalHtmlSgstAmountId);
    let jVarHtmlSgstAmountIdValue = jVarHtmlSgstAmountId.value.trim();
    return jVarHtmlSgstAmountIdValue;
};

let jFLocalFromDomCgstAmountId = () => {
    let jVarLocalHtmlCgstAmountId = 'CgstAmountId';
    let jVarHtmlCgstAmountId = document.getElementById(jVarLocalHtmlCgstAmountId);
    let jVarHtmlCgstAmountIdValue = jVarHtmlCgstAmountId.value.trim();
    return jVarHtmlCgstAmountIdValue;
};

let jFLocalFromDomDiscountAmountId = () => {
    let jVarLocalHtmlDiscountAmountId = 'DiscountAmountId';
    let jVarHtmlDiscountAmountId = document.getElementById(jVarLocalHtmlDiscountAmountId);
    let jVarHtmlDiscountAmountIdValue = jVarHtmlDiscountAmountId.value.trim();
    return jVarHtmlDiscountAmountIdValue;
};

let jFLocalNettAmountId = ({ inNettAmountId }) => {
    let jVarLocalHtmlId = 'NettAmountId';
    let jVarLocalNettAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalNettAmountId.value = inNettAmountId;
};

let jFLocalSgstAmountId = ({ inSgstAmountId }) => {
    let jVarLocalHtmlId = 'SgstAmountId';
    let jVarLocalSgstAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalSgstAmountId.value = inSgstAmountId;
};

let jFLocalCgstAmountId = ({ inCgstAmountId }) => {
    let jVarLocalHtmlId = 'CgstAmountId';
    let jVarLocalCgstAmountId = document.getElementById(jVarLocalHtmlId);
    jVarLocalCgstAmountId.value = inCgstAmountId;
};

let jFLocalFromDomOrderAmountId = () => {
    let jVarLocalHtmlOrderAmountId = 'OrderAmountId';
    let jVarHtmlOrderAmountId = document.getElementById(jVarLocalHtmlOrderAmountId);
    let jVarHtmlOrderAmountIdValue = jVarHtmlOrderAmountId.innerHTML;
    return jVarHtmlOrderAmountIdValue;
};

export { StartFunc };