export const insertElement = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

export const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html;

  return template.content.childNodes[1];
};

export const getElementMeta = (element) => element.getBoundingClientRect();

export const addStyles = (element, styles) => {
  element.style.cssText = `${element.style.cssText}${styles}`;
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
  position: ({ top, left }) => `
    top: ${top}px;
    left: ${left}px;
  `,
  dimension: ({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
  `,
};
