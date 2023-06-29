import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../ToLocalStorage/ItemsInOrder/Bulk.js";

let StartFunc = () => {
    // jFLocalBranchName();
    // jFLocalShowCustomerMobile();
    // jFLocalShowCustomerName();

    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });

    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage({ inPk: jFLocalOrderNumber });

    if (jVarLocalFromLocalStorage.KTF === false) {
        return false;
    };

    StartFuncToLocalStorage({ inData: jVarLocalFromLocalStorage.JsonData.ItemsInOrder });
};

const jFLocalBranchName = () => {
    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "BranchName" });

    let jVarLocalHtmlId = "BranchNameId";
    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.innerHTML = jFLocalBranchName;
};

let jFLocalShowCustomerMobile = () => {
    let jVarLocalHtmlId = "OrderInfoCustomerMobileId";

    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "CustomerMobile" });

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.innerHTML = jFLocalBranchName;
};

let jFLocalShowCustomerName = () => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";

    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "CustomerName" });

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.innerHTML = jFLocalBranchName;
};

let jFLocalShowOrderNumber = () => {
    let jVarLocalHtmlId = "OrderNumberId";

    let jFLocalBranchName = getUrlQueryParams({ inGetKey: "OrderNumber" });

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    jVarLocalBranchNameId.innerHTML = jFLocalBranchName;
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }