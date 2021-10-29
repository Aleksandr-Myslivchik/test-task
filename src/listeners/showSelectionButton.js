import { showOptionsBord } from "./showOptionsBord.js"

export function showSelectionButton(e) {

    const target = e.target
    const root = target.closest('.custom-select-root')
    if (!target.matches('.select-block__chosen-items-wrapper.active span') || root.matches('.active')) {
        return
    }
    showOptionsBord(e, root)
}