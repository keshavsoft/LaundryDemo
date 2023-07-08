import { StartFunc as StartFuncSaveButton } from "./SaveButton/StartFunc.js";
import { StartFunc as StartFuncKeyPress } from "./DiscountId/KeyPress.js";
import { StartFunc as StartFunconkeyupAssign } from "./DiscountPerId/onkeyupAssign.js";

let StartFunc = () => {
    //console.log("wkddshclicked");
    StartFuncSaveButton();
    StartFuncKeyPress();
    StartFunconkeyupAssign();
};

export { StartFunc };