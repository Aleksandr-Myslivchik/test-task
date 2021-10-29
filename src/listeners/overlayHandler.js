export function overlayHandler(state) {

    const childsCheckbox = state.selectItem.querySelectorAll(".select__option__checkbox")
    childsCheckbox.forEach(element => {
        if (element.checked) {
            element.closest('.select__option__item').classList.add('active')
        } else {
            element.closest('.select__option__item').classList.remove('active')
        }
    });
}
