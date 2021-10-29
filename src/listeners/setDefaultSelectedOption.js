import { checkBoxSetState } from "./checkBoxSetState.js"
import { setDeafaultOptionAmount } from "./setDeafaultOptionAmount.js"

export function setDefaultSelectedOption(state) {

    state.defaultSelected.forEach(option => {
        const checkBox = option.querySelector('.select__option__checkbox')
        checkBox.checked = true
        checkBoxSetState(checkBox, state)
    })
    setDeafaultOptionAmount(state)
}