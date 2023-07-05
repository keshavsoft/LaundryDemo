import CommonKeys from "../Keys.json" assert { type: "json" };
import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inEntry, inPk }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalParsed = JSON.parse(jVarLocalFromLocalStorage);

    if (inPk in jVarLocalParsed) {
        jVarLocalParsed[inPk] = {
            ...jVarLocalParsed[inPk],
            ...inEntry
        };

        StartFuncBulk({ inData: jVarLocalParsed });

        return inPk;

    }
    return false;
};

export { StartFunc };