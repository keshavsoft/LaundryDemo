import { StartFunc as StartFuncToLocalStorage } from "../../../../../../../../../../../ToLocalStorage/CheckOutData/Update.js";

let StartFunc = ({inCashAmount,inCardAmount,inUPIAmount }) => {
    return jFToLocalStorage({ inCashAmount,inCardAmount,inUPIAmount });
};

const jFToLocalStorage = ({ inCashAmount,inCardAmount,inUPIAmount }) => {

    return StartFuncToLocalStorage({ inCashAmount,inCardAmount,inUPIAmount });
};

export { StartFunc };