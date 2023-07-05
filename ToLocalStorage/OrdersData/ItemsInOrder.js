import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

const toNumbers = arr => arr.map(Number);

let StartFunc = ({ inEntry, inPk }) => {

    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalParsed = JSON.parse(jVarLocalFromLocalStorage);

    if (inPk in jVarLocalParsed) {
        console.log("asdfhjkl", inPk, jVarLocalParsed);

        jVarLocalParsed[inPk] = inEntry;

        StartFuncBulk({ inData: jVarLocalParsed });

        return inPk;

    }
    return false;
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