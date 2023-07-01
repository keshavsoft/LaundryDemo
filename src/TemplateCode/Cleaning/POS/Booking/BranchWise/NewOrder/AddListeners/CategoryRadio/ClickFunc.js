import { StartFunc as StartFuncItemsInCategory } from "./ToSelectFromLocalStorage.js";

let StartFunc = () => {
    let jVarLocalRadios = document.querySelectorAll('input[type=radio]');

    Array.from(jVarLocalRadios).forEach(link => {
        link.addEventListener('click', function (event) {
            let jVarLocalCurrentTarget = event.currentTarget;
            let jVarLocalCategory = jVarLocalCurrentTarget.dataset.category;

            StartFuncItemsInCategory({ inCategory: jVarLocalCategory });
        });
    });
};

export { StartFunc };