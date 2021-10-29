import { showOptionsBord } from "../showOptionsBord.js"

export const selectWrapperListener = e => {

    const target = e.target
    const inputWrapper = target.closest('.select-block__input-wrapper')
    const root = target.closest('.custom-select-root')
    if (inputWrapper && !root.matches('.active')) {
        showOptionsBord(e, root)
    }
}

