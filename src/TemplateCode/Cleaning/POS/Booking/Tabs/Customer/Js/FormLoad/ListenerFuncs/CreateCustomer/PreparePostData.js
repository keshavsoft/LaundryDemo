let StartFunc = () => {
    return {
        ...jFLocalCustomerName(),
        ...jFLocalMobile(),
        ...jFLocalCity()
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

let jFLocalCity = () => {
    let jVarLocalHtmlCityId = "CityId";
   let  jVarCreateFolderInputId = document.getElementById(jVarLocalHtmlCityId);
   let jVarLocalFolderName = jVarCreateFolderInputId.value.trim();
   //jVarLocal.innerHTML = ;
   return {
        City: jVarLocalFolderName
   }
};



export { StartFunc };