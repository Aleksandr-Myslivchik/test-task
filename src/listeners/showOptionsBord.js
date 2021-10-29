import { ACTIVE_TITLE } from '../constants/activeTitlle.js'

export function showOptionsBord(e, rootElement) {

    const target = e.target
    const selectWrapper = target.closest('.select-block__wrapper')
    const select = rootElement.querySelector('.select')
    const title = target.closest('.select-block__wrapper')
        .querySelector('.select-block__title-item')
    const arrow = target.closest('.select-block__wrapper')
        .querySelector('.select-block__title__arrow')
    const footer = target.closest('.custom-select-root')
        .querySelector('.select-block__footer')
    rootElement.classList.add('active')
    select.classList.add('active')
    selectWrapper.classList.add('active')
    title.classList.add('active')
    arrow.classList.add('active')
    footer.classList.add('active')
    title.innerText = ACTIVE_TITLE
}