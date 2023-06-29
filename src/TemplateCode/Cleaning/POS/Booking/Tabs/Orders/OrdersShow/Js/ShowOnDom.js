import { StartFunc as StartFuncFromLocalStorage } from "../../../../../../../../../FromLocalStorage/OrdersData/Bulk.js";

let StartFunc = async () => {
    let jVarLocalDataNeeded = StartFuncFromLocalStorage();
    
    console.log("jVarLocalDataNeeded : ", jVarLocalDataNeeded);

    if (jVarLocalDataNeeded !== null) {
        let jVarLocalRawTemplate = document.getElementById("HbsTemplateForFoldersOnly").innerHTML;
        document.getElementById("KCont1").innerHTML = Handlebars.compile(jVarLocalRawTemplate)(jVarLocalDataNeeded);
    };
};

export { StartFunc }