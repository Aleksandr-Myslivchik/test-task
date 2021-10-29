import { checkBoxSetState } from "../checkBoxSetState.js";
import { collectChosenOptions } from "../collectChosenOptions.js";


export const selectCheckboxListener = (e, state) => {

  const target = e.target;
  if (!target.matches(".select__option__checkbox")) return
  checkBoxSetState(target, state)
  collectChosenOptions(target, state)

};




