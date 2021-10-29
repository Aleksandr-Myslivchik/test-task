import { DEFAULT_TITLE } from "../../constants/defaultTitle.js"
import { SELECTION_NUMBER } from "../../constants/selectionNumber.js"
import { DEFAULT_INPUT_PLACEHOLDER } from "../../constants/defaultInputPlaceholder.js"

export const createSelectWrapper = () => {


  const selectWrapper = document.createElement('div')
  selectWrapper.classList.add('select-block__wrapper')
  selectWrapper.insertAdjacentHTML('afterbegin', `
    <div class="select-block__header">
  <div class='select-block__title-wrapper'>
    <div class='select-block__title__arrow'></div>
    <span class='select-block__title-item'>${DEFAULT_TITLE}</span>
  </div>
  <div class="select-block__chosen-items-wrapper">
    <span class="select-block__chosen-items-description">${SELECTION_NUMBER}&nbsp;<span class='select-block__chosen-items-amount'></span></span>
  </div>
</div>
<div class='select-block__input-wrapper'>
  <input type='text' class='select-block__input-item' placeholder='${DEFAULT_INPUT_PLACEHOLDER}'/>
</div>
`)
  return selectWrapper
}

