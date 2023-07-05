import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../ToLocalStorage/OrdersData/ItemsInOrder.js";

import { StartFunc as StartFuncPrepareData } from "./../PrepareData/StartFunc.js";
import { StartFunc as StartFuncLocalToUrl } from "./LocalToUrl.js";

const StartFunc = () => {
    let jVarLocalOrderNumberFromDom = jFLocalFromDomOrderNumberId();
    let jVarLocalToLocalStorage = StartFuncPrepareData();

    let jVarLocalOrderNumber = StartFuncToLocalStorage({
        inEntry: jVarLocalToLocalStorage,
        inPk: jVarLocalOrderNumberFromDom
    });

    if (jVarLocalOrderNumber > 0) {
        StartFuncLocalToUrl({
            inBranchName: jVarLocalToLocalStorage.CustomerData.BranchName,
            inOrderNumber: jVarLocalOrderNumber
        });
    };
};

let jFLocalFromDomOrderNumberId = () => {
    let jVarLocalHtmlOrderNumberId = 'OrderNumberId';
    let jVarHtmlOrderNumberId = document.getElementById(jVarLocalHtmlOrderNumberId);
    let jVarHtmlOrderNumberIdValue = jVarHtmlOrderNumberId.innerHTML;
    return jVarHtmlOrderNumberIdValue;
};

export { StartFunc }