import { hideOptionsBord } from "../hideOptionsBord.js"
import { setDeafaultOptionAmount } from "../setDeafaultOptionAmount.js"

export function confirmButtonListener(e, state) {

    const target = e.target
    if (!target.matches('.select-block__footer-button-wrapper,.select-block__footer-button-item') || !state.chosenOptions.length) {
        return
    }
    state.selectedOptionsState.length = 0
    state.chosenOptions.forEach(el => {
        if (!state.selectedOptionsState.includes(el)) {
            state.selectedOptionsState.push(el)
        }
    })
    setDeafaultOptionAmount(state)
    hideOptionsBord(state)
    console.log('Confirm', state)
}




  