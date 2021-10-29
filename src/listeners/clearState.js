import { DEFAULT_TITLE } from "../constants/defaultTitle.js"
import { DEFAULT_INPUT_PLACEHOLDER } from '../constants/defaultInputPlaceholder.js'

export function clearState(state) {

    state.chosenOptions.length = 0
    state.selectedOptionsState.length = 0
    state.defaultSelected.length = 0
    state.isEmpty = true
    const selectionAmountBlock = state.root.querySelector('.select-block__chosen-items-wrapper')
    const selectInputWrapper = state.root.querySelector('.select-block__input-wrapper')
    const selectInput = state.root.querySelector('.select-block__input-item')
    const title = state.root.querySelector('.select-block__wrapper').querySelector('.select-block__title-item')
    selectionAmountBlock.classList.remove('active')
    selectInputWrapper.classList.remove('active')
    selectInput.classList.remove('active')
    selectInput.value = ''
    selectInput.setAttribute('placeholder', DEFAULT_INPUT_PLACEHOLDER)
    title.textContent = DEFAULT_TITLE
    state.selectItem.innerHTML = ''
    state.selectItem.append(...state.sortedOptions)
    for (const description of state.selectItem.querySelectorAll('.select__option__item__description')) {
        description.innerHTML = description.innerHTML.trim().replace('<b>', '').replace('</b>', '')
    }
}
