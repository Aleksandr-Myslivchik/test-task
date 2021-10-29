export function searchOption(event, state, select) {

    const text = event.target.value
    const optionsToRender = []
    const { sortedOptions } = state
    for (const e of sortedOptions) {
        for (const description of e.querySelectorAll('.select__option__item__description')) {
            description.innerHTML = description.innerHTML.trim().replace('<b>', '').replace('</b>', '')
            if (description.textContent.trim().includes(text)) {
                description.innerHTML = description.textContent.replace(text, `<b>${text}</b>`)
                if (!e.dataset.level) {
                    optionsToRender.push(e)
                }
            }
        }
    }
    if (!optionsToRender.length) {
        select.innerHTML = ''
        select.append(...state.sortedOptions)
    } else {
        select.innerHTML = ''
        select.append(...optionsToRender)
    }
}