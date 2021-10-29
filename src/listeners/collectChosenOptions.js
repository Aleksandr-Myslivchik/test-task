export function collectChosenOptions(element, state) {

    const checkedInputs = element.closest('.select').querySelectorAll('input:checked')
    state.chosenOptions.length = 0
    Array.from(checkedInputs).forEach(input => {
      const option = input.closest('.select__option__item')
      option && state.chosenOptions.push(option)
    })
  }
  