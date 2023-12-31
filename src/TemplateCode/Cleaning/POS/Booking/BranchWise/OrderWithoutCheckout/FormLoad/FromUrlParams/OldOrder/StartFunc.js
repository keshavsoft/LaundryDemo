import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../../FromLocalStorage/OrdersData/FromPk.js";
import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../ToLocalStorage/ItemsInOrder/Bulk.js";

import { StartFunc as StartFuncToLocalStorageAddOn } from "../../../../../../../../../../ToLocalStorage/AddOnData/Bulk.js";

import { StartFunc as StartFuncAddToDom } from "../../AddToDom.js";
import { StartFunc as StartFuncShowOnDom } from "../../../ShowOnDom/StartFunc.js";

let StartFunc = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });

    jFLocalFromOrdersDataToItemsInOrder();
    jFLocalAddAddOnData();

    StartFuncAddToDom({ inPk: jFLocalOrderNumber });
    StartFuncShowOnDom({ inPk: jFLocalOrderNumber });
};

let jFLocalFromOrdersDataToItemsInOrder = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage({ inPk: jFLocalOrderNumber });

    if (jVarLocalFromLocalStorage.KTF === false) {
        return false;
    };

    StartFuncToLocalStorage({ inData: jVarLocalFromLocalStorage.JsonData.ItemsInOrder });
};

let jFLocalAddAddOnData = () => {
    let jFLocalOrderNumber = getUrlQueryParams({ inGetKey: "OrderNumber" });
    let jVarLocalFromLocalStorage = StartFuncFromLocalStorage({ inPk: jFLocalOrderNumber });

    if (jVarLocalFromLocalStorage.KTF === false) {
        return false;
    };

    StartFuncToLocalStorageAddOn({ inData: jVarLocalFromLocalStorage.JsonData.AddOnData });
};

let getUrlQueryParams = ({ inGetKey }) => {
    const queryString = window.location.search;
    const parameters = new URLSearchParams(queryString);
    const value = parameters.get(inGetKey);
    return value;
};

export { StartFunc }