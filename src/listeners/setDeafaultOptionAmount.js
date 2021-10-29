import { DEFAULT_TITLE } from "../constants/defaultTitle.js"
import { HAS_OPTIONS_TITLE } from "../constants/hasOptionsTitle.js"

export function setDeafaultOptionAmount(state) {

    const selectionAmountBlock = state.root.querySelector('.select-block__chosen-items-wrapper')
    const selectionAmount = state.root.querySelector('.select-block__chosen-items-amount')
    const selectInputWrapper = state.root.querySelector('.select-block__input-wrapper')
    const selectInput = state.root.querySelector('.select-block__input-item')
    const inputPlaceholder = state.selectedOptionsState[0].querySelector('.select__option__item__description').textContent.trim()
    const title = root.querySelector('.select-block__wrapper')
        .querySelector('.select-block__title-item')
    selectionAmountBlock.classList.add('active')
    selectionAmount.textContent = `(${state.chosenOptions.length})`
    state.isEmpty = false
    selectInput.value = ''
    selectInput.setAttribute('placeholder', inputPlaceholder)
    selectInputWrapper.classList.add('active')
    selectInput.classList.add('active')
    title.textContent = state.selectedOptionsState.length ? HAS_OPTIONS_TITLE : DEFAULT_TITLE
}