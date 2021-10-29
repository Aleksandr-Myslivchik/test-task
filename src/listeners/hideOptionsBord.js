import { DEFAULT_TITLE } from "../constants/defaultTitle.js"
import { HAS_OPTIONS_TITLE } from "../constants/hasOptionsTitle.js"

export function hideOptionsBord(state) {

    const root = state.root
    const selectWrapper = root.querySelector('.select-block__wrapper')
    const select = root.querySelector('.select')
    const title = root.querySelector('.select-block__wrapper')
        .querySelector('.select-block__title-item')
    const arrow = root.querySelector('.select-block__wrapper')
        .querySelector('.select-block__title__arrow')
    const footer = root.querySelector('.select-block__footer')
    root.classList.remove('active')
    select.classList.remove('active')
    selectWrapper.classList.remove('active')
    title.classList.remove('active')
    arrow.classList.remove('active')
    footer.classList.remove('active')
    title.textContent = state.selectedOptionsState.length ? HAS_OPTIONS_TITLE : DEFAULT_TITLE
}
