export const insertElement = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

export const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html;

  return template.content.firstElementChild;
};

export const getElementMeta = (element) => element.getBoundingClientRect();
