import { StartFunc as StartFuncSaveButton } from "./SaveButton/StartFunc.js";
import { StartFunc as StartFuncKeyPress } from "./DiscountId/KeyPress.js";

let StartFunc = () => {
    //console.log("wkddshclicked");
    StartFuncSaveButton();
    StartFuncKeyPress();
};

export { StartFunc };