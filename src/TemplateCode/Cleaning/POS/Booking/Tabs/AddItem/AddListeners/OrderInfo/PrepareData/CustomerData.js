let StartFunc = () => {
    return {
        "BranchName": jFLocalBranchName(),
        "CustomerName": jFLocalShowCustomerName(),
        "CustomerMobile": jFLocalShowCustomerMobile()
    };
};

const jFLocalBranchName = () => {
    let jVarLocalHtmlId = "BranchNameId";
    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    return jVarLocalBranchNameId.innerHTML;
};

let jFLocalShowCustomerMobile = () => {
    let jVarLocalHtmlId = "OrderInfoCustomerMobileId";

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    return jVarLocalBranchNameId.innerHTML;
};

let jFLocalShowCustomerName = () => {
    let jVarLocalHtmlId = "OrderInfoCustomerNameId";

    let jVarLocalBranchNameId = document.getElementById(jVarLocalHtmlId);
    return jVarLocalBranchNameId.innerHTML;
};

export { StartFunc }