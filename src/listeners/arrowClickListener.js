import { HIDE_CHILDREN_OPTIONS_TIMEOUT } from "../constants/hideChildrenOptionsTimeOut.js";

export const arrowClickListener = e => {
  
  let isDisabled = false;
  const target = e.target.closest(".arrow");
  const nestedContainer = e.target.closest(".nested");
  if (target && !isDisabled) {
    isDisabled = true;
    target.classList.toggle("inprocess");
    setTimeout(() => {
      nestedContainer.classList.toggle("show-border");
      target.classList.toggle("inprocess");
      target.classList.toggle("show");
      isDisabled = false;
    }, HIDE_CHILDREN_OPTIONS_TIMEOUT);
  }
};
