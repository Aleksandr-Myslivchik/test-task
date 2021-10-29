import { createOption } from "./Components/SelectCMP/optionCreator.js";
import { traverseOptions } from "./Components/SelectCMP/traverseoptions.js";
import { arrowClickListener } from "./listeners/arrowClickListener.js";
import { selectCheckboxListener } from "./listeners/selectListener/selectCheckboxListener.js";
import { selectWrapperListener } from "./listeners/selectListener/selectWrapperListener.js";
import { createSelectWrapper } from "./Components/SelectCMP/createSelectWrapper.js";
import { createFooter } from "./Components/SelectCMP/createSelectFooter.js";
import { showSelectionButton } from "./listeners/showSelectionButton.js";
import { confirmButtonListener } from "./listeners/selectListener/confirmButtonListener.js";
import { clearButtonListener } from "./listeners/clearButtonListener.js";
import { setDefaultSelectedOption } from './listeners/setDefaultSelectedOption.js'
import { selectTitleListener } from './listeners/selectListener/selectTitleListener.js'
import { searchOption } from "./listeners/selectListener/searchOption.js";


class SelectItem {
  constructor(selectRoot, item) {
    this.state = {
      root: selectRoot,
      selectItem: item,
      sortedOptions: [],
      everyOption: [],
      chosenOptions: [],
      selectedOptionsState: [],
      isEmpty: true,
      defaultSelected: [],
    }
  }
}

export default class Selects {
  #root = document.querySelector("#root")
  #selects = Array.from(document.querySelectorAll("select"))

  constructor() {
    this.selectItems = []
  }
  render = () => {

    for (const select of this.#selects) {

      const selectRoot = document.createElement('div')
      const customSelect = document.createElement("div");
      const selectItem = new SelectItem(selectRoot, customSelect)
      this.selectItems.push(selectItem)
      selectRoot.classList.add('custom-select-root')
      customSelect.classList.add("select");
      customSelect.setAttribute("name", select.name);
      const selectWrapperElement = createSelectWrapper()

      for (let option of select.children) {

        const description = option.textContent
        const level = option.dataset.level
        const value = option.value
        const id = this.#selects.indexOf(select) + value + "_" + option.tagName
        const customOption = createOption(description, level, value, id)
        if (!level) {
          customSelect.append(customOption)
        } else {
          traverseOptions(customSelect, level, customOption)
        }
        if (option.selected) {
          selectItem.state.defaultSelected.push(customOption)
          selectItem.state.selectedOptionsState.push(customOption)
          selectItem.state.chosenOptions.push(customOption)
        }
        if (!level) {
          selectItem.state.sortedOptions.push(customOption)
        } else if (level == 2) {
          const defaultOptionToState = selectItem.state.everyOption[selectItem.state.everyOption.length - 1]
          !selectItem.state.sortedOptions.includes(defaultOptionToState) && selectItem.state.sortedOptions.push(defaultOptionToState)
        }
        customOption.querySelector('.select__option__checkbox').value = option.textContent.trim()
        selectItem.state.everyOption.push(customOption)
      }
      const footer = createFooter()

      customSelect.addEventListener('change', (e) => {
        console.log(e.target.value)
        selectCheckboxListener(e, selectItem.state)
      });
      selectWrapperElement.addEventListener('click', (e) => {
        selectWrapperListener(e)
        selectTitleListener(e, selectItem.state)
        showSelectionButton(e)
      })
      const input = selectWrapperElement.querySelector('.select-block__input-item')
      input.addEventListener('input', (e) => {
        searchOption(e, selectItem.state, customSelect)
      })
      input.addEventListener('paste', (e) => {
        searchOption(e, selectItem.state, customSelect)
      })
      selectRoot.addEventListener('click', (e) => {
        arrowClickListener(e)
        confirmButtonListener(e, selectItem.state)
        clearButtonListener(e, selectItem.state)
      })
      selectRoot.append(selectWrapperElement, customSelect, footer)
      this.#root.append(selectRoot);
      if (selectItem.state.defaultSelected.length) {
        setDefaultSelectedOption(selectItem.state)
      }
    }
    console.log(this.selectItems)
  }
}