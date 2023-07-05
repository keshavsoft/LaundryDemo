import { StartFunc as StartFuncNewOrder } from "./NewOrder/StartFunc.js";
import { StartFunc as StartFuncAddNew } from "./AddNew.js";
import { StartFunc as StartFuncOldOrder } from "./OldOrder/StartFunc.js";

let StartFunc = () => {
    // StartFuncNewOrder();
    
    StartFuncOldOrder();
    // StartFuncAddNew();  
    
};

export { StartFunc }