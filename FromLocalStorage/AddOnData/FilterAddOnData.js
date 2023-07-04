import { StartFunc as StartFuncBulk } from "./Bulk.js";

let StartFunc = ({ inAddOnItemSerial }) => {
    let jVarLocalFromLocalStorage = StartFuncBulk();
    console.log("abcd",jVarLocalFromLocalStorage);
    // let jVarLocalFiletered = jVarLocalFromLocalStorage.filter(element => {
    //     return element.AddOnItemSerial === inAddOnItemSerial;
    // });

    //return jVarLocalFiletered;
    return jVarLocalFromLocalStorage;
};

export { StartFunc };