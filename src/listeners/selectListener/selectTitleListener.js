import { hideOptionsBord } from "../hideOptionsBord.js"
import { turnBackCheckbosState } from "../turnBackCheckboxState.js"

export function selectTitleListener(e, state) {

    if (!e.target.matches('.select-block__title__arrow.active')) {
        return
    }
    hideOptionsBord(state)
    turnBackCheckbosState(state)
}