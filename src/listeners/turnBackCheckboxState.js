import { checkBoxSetState } from "./checkBoxSetState.js"

export function turnBackCheckbosState(state) {

    if (state.selectedOptionsState.length) {
        state.selectedOptionsState.forEach(option => {
            const checkBox = option.querySelector('.select__option__checkbox')
            checkBox.checked = true
            checkBoxSetState(checkBox, state)
        })
    }
}
