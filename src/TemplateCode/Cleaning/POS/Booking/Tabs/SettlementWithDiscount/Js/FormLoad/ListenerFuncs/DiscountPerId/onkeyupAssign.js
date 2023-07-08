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


    console.log('Saving data : ', jVarLocalOrderAmount, jVarLocalShowButtonClass.value);
};

let jFLocalFromDomOrderAmountId = () => {
    let jVarLocalHtmlOrderAmountId = 'OrderAmountId';
    let jVarHtmlOrderAmountId = document.getElementById(jVarLocalHtmlOrderAmountId);
    let jVarHtmlOrderAmountIdValue = jVarHtmlOrderAmountId.innerHTML;
    return jVarHtmlOrderAmountIdValue;
};

export { StartFunc };