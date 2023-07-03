import { StartFunc as StartFuncFromLocalStorage } from "../../FromLocalStorage/ItemsInOrder.js";
import { StartFunc as StartFuncFromPk } from "./../../../../../../../../../FromLocalStorage/ItemsInOrder/FromPk.js";
let StartFunc = ({ inEvent }) => {
    console.log("inEvent:", inEvent);
    let jVarLocalCurrentTarget = inEvent.currentTarget;
    let jVarLocalClosestCardHeader = jVarLocalCurrentTarget.closest(".card-header");

    let jvarLocalOption = document.getElementById("AddOnServiceId").value;
    if (jvarLocalOption === '8') {
        return jFLocalForDiscount({ inCardHeader: jVarLocalClosestCardHeader });
    }
    else {
        return jFLocalForAddOn();

    }

};

let jFLocalForDiscount = ({ inCardHeader }) => {
    let jVarLocalAddRate = jFLocalFromDomAddOnRateId();
    console.log("jVarLocalAddRate:", jVarLocalAddRate);
    if (jVarLocalAddRate >= 0) {
        console.log("afhg");
        return false;
    }

    else {
        let jVarLocalItemId = jFLocalFromDomAddOnItemId();
        let localFromPk = StartFuncFromPk({ inPk: jVarLocalItemId });
        let jvarLocalRate = localFromPk.Rate;
        let jVarLocalPercentage = (jVarLocalAddRate / jvarLocalRate) * 100;

        console.log("jVarLocalPercentage:", Math.abs(jVarLocalPercentage));
        if (Math.abs(jVarLocalPercentage) > 10) {
            inCardHeader.style = "background-color: red;"
            return false;
        }
        else {
            console.log("Valid");
            inCardHeader.style = "background-color:"

            return true;
        }


    };
}


let jFLocalFromDomAddOnRateId = () => {
    let jVarLocalHtmlAddOnRateId = 'AddOnRateId';
    let jVarHtmlAddOnRateId = document.getElementById(jVarLocalHtmlAddOnRateId);
    let jVarHtmlAddOnRateIdValue = jVarHtmlAddOnRateId.value.trim();
    return jVarHtmlAddOnRateIdValue;
};

let jFLocalFromDomAddOnItemId = () => {
    let jVarLocalHtmlAddOnItemId = 'AddOnItemId';
    let jVarHtmlAddOnItemId = document.getElementById(jVarLocalHtmlAddOnItemId);
    let jVarHtmlAddOnItemIdValue = jVarHtmlAddOnItemId.value.trim();
    return jVarHtmlAddOnItemIdValue;
};

let jFLocalForAddOn = () => {
    let jVarLocalAddOnItemId = document.getElementById("AddOnItemId");

    let jVarLocaljVarLocalAddOnItemIdValue = jVarLocalAddOnItemId.value;
    let jVarFromLocalStorage = StartFuncFromLocalStorage();

    if (jVarLocaljVarLocalAddOnItemIdValue in jVarFromLocalStorage === false) {
        return false;
    };

    if (jFLocalForAddOnService() === false) return false;

    return true;
};
const jFLocalForAddOnService = () => {
    let jVarLocalHtmlId = "AddOnServiceId";
    let jVarLocalAddOnServiceId = document.getElementById(jVarLocalHtmlId);
    let jVarLocalAddOnServiceIdValue = jVarLocalAddOnServiceId.value;

    if (jVarLocalAddOnServiceIdValue === "") {
        jVarLocalAddOnServiceId.classList.add("is-invalid");
        jVarLocalAddOnServiceId.focus();
        return false;
    } else {
        jVarLocalAddOnServiceId.classList.remove("is-invalid");
        jVarLocalAddOnServiceId.classList.add("is-valid");
    };
};

export { StartFunc };