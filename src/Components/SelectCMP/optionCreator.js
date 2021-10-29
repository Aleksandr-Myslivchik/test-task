export const createOption = (description, level, value, id) => {
    const optionItem = document.createElement("div");
    optionItem.classList.add("select__option__item");
    optionItem.setAttribute("data-value", value);
    level && optionItem.setAttribute("data-level", level);
    optionItem.insertAdjacentHTML(
        "afterbegin",
        `
            <div class='select__option__overlay'></div>
            <div class="select__option__checkbox__wrapper">
                <input id="select__option__checkbox__item_${id}" type="checkbox" class="select__option__checkbox">
                <div class='select__checkbox'></div>
                </div>
            <label for="select__option__checkbox__item_${id}">
                <div class="select__option__item__description">${description}</div>
            </label>
    `
    );
    return optionItem;
};