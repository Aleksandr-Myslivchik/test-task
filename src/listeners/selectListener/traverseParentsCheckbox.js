export const traverseParentCheckbox = (element) => {

  const childsCheckboxBcgr = [...element.querySelectorAll(".select__checkbox")];
  const currentCheckbox = element.querySelector(".select__option__checkbox");
  const targetCheckBoxParentOption = element.closest(".nested").closest(".select__option__children-container");
  currentCheckbox.checked = false;

  for (let background of childsCheckboxBcgr) {
    if (background.matches(".some-childs-checked")) {
      background.classList.remove("some-childs-checked");
    }
  }
  if (!targetCheckBoxParentOption) {
    element.closest(".nested").querySelector(".select__checkbox").classList.remove("some-childs-checked");
  }
};
