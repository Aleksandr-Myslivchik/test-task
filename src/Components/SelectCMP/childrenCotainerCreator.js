export const createChildrenContainer = (level) => {
  
  const container = document.createElement("div");
  container.classList.add(
    "select__option__children-container",
    `children-container_level-${level}`
  );
  container.setAttribute("data-level", level);
  return container;
};
