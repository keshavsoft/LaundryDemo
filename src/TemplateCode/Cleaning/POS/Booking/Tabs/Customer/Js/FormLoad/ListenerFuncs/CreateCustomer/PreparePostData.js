let StartFunc = () => {
    return {
        ...jFLocalCustomerName(),
        ...jFLocalMobile()
    };
};

let jFLocalCustomerName = () => {
    let jVarLocalHtmlRateId = "CustomerNameId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        CustomerName: jVarLocalFolderName
    };
};

let jFLocalMobile = () => {
    let jVarLocalHtmlRateId = "MobileId";
    let jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlRateId);

    let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();

    return {
        Mobile: jVarLocalFolderName
    };
};

export { StartFunc };