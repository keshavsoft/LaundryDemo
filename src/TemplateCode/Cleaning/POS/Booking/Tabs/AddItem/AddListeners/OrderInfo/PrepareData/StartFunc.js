import { StartFunc as StartFuncPresentOrderData } from "./PresentOrderData.js";
import { StartFunc as StartFuncCustomerData } from "./CustomerData.js";

const StartFunc = () => {
    let jVarLocalToLocalStorage = {};

    jVarLocalToLocalStorage = {
        ...StartFuncPresentOrderData(),
        CustomerData: StartFuncCustomerData()
    };

    return jVarLocalToLocalStorage;
};

export { StartFunc }