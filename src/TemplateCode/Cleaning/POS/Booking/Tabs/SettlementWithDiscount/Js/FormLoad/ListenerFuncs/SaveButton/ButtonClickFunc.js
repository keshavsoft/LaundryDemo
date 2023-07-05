import { StartFunc as StartFuncFetchFunc } from "./FetchFunc.js";
import { StartFunc as StartFuncPreparePostData } from "./PreparePostData.js";
import { StartFunc as StartFuncCheckBeforeFetch } from "./CheckBeforeFetch.js";
import { StartFunc as StartFuncAfterFetch } from "./AfterFetch.js";

let StartFunc = async () => {
    // let jVarFromCheck = StartFuncCheckBeforeFetch();

    if (StartFuncCheckBeforeFetch()) {
        let jVarLocalBodyData = StartFuncPreparePostData()

        let response = await StartFuncFetchFunc({
            inSettlementData: jVarLocalBodyData
        });

        // StartFuncAfterFetch({
        //     inFromFetch: response, inCustomerName: jVarLocalBodyData.CustomerName
        // });
    };
};

export { StartFunc };