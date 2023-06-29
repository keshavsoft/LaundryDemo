import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

const toNumbers = arr => arr.map(Number);

let StartFunc = ({ inCashAmount, inCardAmount, inUPIAmount }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.CheckOutData);
    let jVarLocalParsed = JSON.parse(jVarLocalFromLocalStorage);
    jVarLocalParsed.CashAmount = inCashAmount;
    jVarLocalParsed.CardAmount = inCardAmount;
    jVarLocalParsed.UPIAmount = inUPIAmount;
    localStorage.setItem(CommonKeys.CheckOutData , JSON.stringify(jVarLocalParsed));

};

let jFLocalPrepareData = ({ inEntry }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalItemData = JSON.parse(jVarLocalFromLocalStorage);
    let jVarLocalvalues = Object.values(jVarLocalItemData);
    let jVarLocalPkArray = jVarLocalvalues.map(element => element.pk);
    const max = Math.max(...jVarLocalPkArray);

    return {
        ...inEntry,
        pk: max + 1
    };
};

export { StartFunc };