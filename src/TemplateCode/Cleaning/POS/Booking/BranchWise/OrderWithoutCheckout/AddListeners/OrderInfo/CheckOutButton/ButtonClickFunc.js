import { StartFunc as StartFuncOrdersData } from "../../../../../../../../../../ToLocalStorage/OrdersData/Single.js";
import { StartFunc as StartFuncPrepareData } from "./../PrepareData/StartFunc.js";
import { StartFunc as StartFuncLocalToUrl } from "./LocalToUrl.js";

const StartFunc = () => {
    console.log("ugugkjjjkhjk");

    let jVarLocalToLocalStorage = StartFuncPrepareData();
    let jVarLocalOrderNumber = StartFuncOrdersData({ inEntry: jVarLocalToLocalStorage });
    if (jVarLocalOrderNumber > 0) {
        console.log("jVarLocalToLocalStorage : ", jVarLocalToLocalStorage);
        StartFuncLocalToUrl({
            inBranchName: jVarLocalToLocalStorage.CustomerData.BranchName,
            inOrderNumber: jVarLocalOrderNumber
        });
    };
};

export { StartFunc }