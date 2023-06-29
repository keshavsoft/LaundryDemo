import CommonKeys from "../Keys.json" assert { type: "json" };

let StartFunc = ({ inOrderKey, inSettlementData }) => {
    let jVarLocalFromLocalStorage = localStorage.getItem(CommonKeys.OrdersData);
    let jVarLocalParsed = JSON.parse(jVarLocalFromLocalStorage);

    if (inOrderKey in jVarLocalParsed === false) {
        return false;
    };
    console.log("jVarLocalParsed : ", jVarLocalParsed);
    jVarLocalParsed[inOrderKey].CheckOutData = inSettlementData;

    localStorage.setItem(CommonKeys.OrdersData, JSON.stringify(jVarLocalParsed));
};

export { StartFunc };