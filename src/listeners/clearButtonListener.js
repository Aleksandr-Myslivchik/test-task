import { clearState } from "./clearState.js"

export function clearButtonListener(e, state) {

    const target = e.target
    const root = target.closest('.custom-select-root')
    if (!target.matches('.select-block__footer-clear-button-wrapper,.select-block__footer-clear-button-item')) {
        return
    }
    const checkedElements = root.querySelectorAll('input:checked')
    const parentNodecheckboxState = root.querySelectorAll('.some-childs-checked')
    if (!checkedElements.length && !state.selectedOptionsState.length) {
        return
    }
    checkedElements && checkedElements.forEach(el => {
        el.checked = false
        el.closest('.select__option__item').classList.remove('active')
    })
    parentNodecheckboxState && parentNodecheckboxState.forEach(el => el.classList.remove('some-childs-checked'))
    clearState(state)
}
