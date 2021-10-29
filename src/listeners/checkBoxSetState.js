import { checkParenCheckboxState } from "./selectListener/checkParentsCheckboxState.js";
import { setCheckChildInputState } from "./selectListener/setInputState.js";

export function checkBoxSetState(checkBox) {

    const checkBoxState = checkBox.checked;
    const option = checkBox.closest(".select__option__item")
    const targetBackground = option.querySelector(".select__checkbox"); // точка
    const childContainer = option.querySelector(".select__option__children-container");
    const nestContainer = checkBox.closest(".select__option__children-container");
    targetBackground.classList.remove("some-childs-checked");
    childContainer && setCheckChildInputState(checkBoxState, childContainer);
    nestContainer && checkParenCheckboxState(nestContainer);
    if(checkBoxState){
        option.classList.add('active')
    }else {
        option.classList.remove('active')
    }
    
}