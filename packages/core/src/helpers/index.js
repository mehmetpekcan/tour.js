export const insertElement = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

export const createElementFromHTML = (html) => {
  const template = document.createElement("template");
  template.innerHTML = html;

  return template.content.childNodes[0];
};

export const CSS_MIXINS = {
  visible: `
    visibility: visible;
    opacity: 1;
  `,
  hidden: `
    visibility: none;
    opacity: 0;
  `,
  position: ({ top, left, width, height }) => `
    top: ${top}px;
    left: ${left - 16}px;
    width: ${width}px;
    height: ${height}px;
  `,
};
