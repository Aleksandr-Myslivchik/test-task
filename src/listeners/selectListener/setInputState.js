
//set checkbox value to children checkboxes
export const setCheckChildInputState = (state, el) => {
    const checkboxWrappers = Array.from(el.querySelectorAll(".select__option__checkbox__wrapper "))
    for (let checkboxWrapper of checkboxWrappers) {
        checkboxWrapper.querySelector('.select__option__checkbox').checked = state
        checkboxWrapper.querySelector('.select__checkbox').classList.remove('some-childs-checked')
    }
};