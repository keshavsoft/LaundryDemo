import { StartFunc as StartFuncCategoryRadio } from "./CategoryRadio/StartFunc.js";
import { StartFunc as StartFuncItemSelect } from "./ItemSelect/OnChange/StartFunc.js";

let StartFunc = () => {
    StartFuncItemSelect();
    StartFuncCategoryRadio();
    // var element = document.getElementById('MenRadioId');
    // var event = new Event('click');
    // console.log("ajsjg",event);
    // element.dispatchEvent(event);
};

export { StartFunc };