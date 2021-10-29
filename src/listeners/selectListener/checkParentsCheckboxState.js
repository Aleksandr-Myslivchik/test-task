import { traverseParentCheckbox } from "./traverseParentsCheckbox.js";

export const checkParenCheckboxState = (element) => {

  const childsCheckbox = Array.from(element.querySelectorAll(".select__option__checkbox"))

  const stateTrueAll = childsCheckbox.every((checkbox) => checkbox.checked === true);
  const stateNotAll = childsCheckbox.some((checkbox) => checkbox.checked === true);

  const parentCheckBoxWrapper = element.closest(".nested").querySelector(".select__checkbox");
  const targetParentCheckBox = element.closest(".nested").querySelector(".select__option__checkbox");
  const targetParentCheckBoxNestContainer = element.closest(".nested").closest(".select__option__children-container");

  if (stateTrueAll) {
    parentCheckBoxWrapper.classList.remove("some-childs-checked");
    targetParentCheckBox.checked = stateTrueAll;
    targetParentCheckBoxNestContainer && checkParenCheckboxState(targetParentCheckBoxNestContainer);
  } else if (!stateTrueAll && stateNotAll) {
    parentCheckBoxWrapper.classList.add("some-childs-checked");
    targetParentCheckBox.checked = stateTrueAll;
    targetParentCheckBoxNestContainer &&
      checkParenCheckboxState(targetParentCheckBoxNestContainer);
  } else if (targetParentCheckBoxNestContainer) {
    traverseParentCheckbox(targetParentCheckBoxNestContainer);
    checkParenCheckboxState(targetParentCheckBoxNestContainer);
  } else {
    targetParentCheckBox.checked = stateNotAll;
    parentCheckBoxWrapper.classList.remove("some-childs-checked");
  }
};
