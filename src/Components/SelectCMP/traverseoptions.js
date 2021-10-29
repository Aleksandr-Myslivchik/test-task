import { createChildrenContainer } from "./childrenCotainerCreator.js";

export const traverseOptions = (element, level, childOption) => {

  const lastElChild = element.lastElementChild;
  const childsNestContainer =
    lastElChild.children[lastElChild.childElementCount - 1];
  if (!childsNestContainer.matches(".select__option__children-container")) {
    const arrowWrapper = document.createElement("div");
    const arrow = document.createElement("div");
    lastElChild.classList.add("nested", "show-border");
    arrowWrapper.classList.add("arrow", "show");
    arrowWrapper.append(arrow);
    lastElChild.insertAdjacentElement("afterbegin", arrowWrapper);
    const container = createChildrenContainer(level);
    container.append(childOption);
    lastElChild.append(container);
  } else if (childsNestContainer.dataset.level == level) {
    childsNestContainer.append(childOption);
  } else {
    traverseOptions(childsNestContainer, level, childOption);
  }
};
