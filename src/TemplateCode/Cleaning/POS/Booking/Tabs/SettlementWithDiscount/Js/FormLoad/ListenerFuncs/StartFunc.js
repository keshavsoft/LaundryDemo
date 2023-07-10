import { StartFunc as StartFuncSaveButton } from "./SaveButton/StartFunc.js";
import { StartFunc as StartFuncKeyPress } from "./DiscountId/KeyPress.js";
import { StartFunc as StartFunconkeyupAssign } from "./DiscountPerId/onkeyupAssign.js";
import { StartFunc as StartFuncCashAmountButton } from "./CashAmountButtonId/ClickFunc.js";

let StartFunc = () => {
    //console.log("wkddshclicked");
    StartFuncSaveButton();
    StartFuncKeyPress();
    StartFunconkeyupAssign();
    StartFuncCashAmountButton();
    
};

export { StartFunc };