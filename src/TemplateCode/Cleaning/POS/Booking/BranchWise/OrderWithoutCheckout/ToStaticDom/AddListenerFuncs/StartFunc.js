import { StartFunc as StartFuncCategoryRadio } from "./CategoryRadio/StartFunc.js";
import { StartFunc as StartFuncItemSelect } from "./ItemSelect/OnChange/StartFunc.js";
import { StartFunc as StartFuncAddItemButton } from "../../../CommonFuncs/AddListeners/AddItem/AddItemButton.js";

let StartFunc = () => {
    StartFuncItemSelect();
    StartFuncCategoryRadio();
    StartFuncAddItemButton();
};

export { StartFunc };