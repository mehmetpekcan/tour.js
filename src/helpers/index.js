export const insertElement = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

export const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html;

  return template.content.firstElementChild;
};

export const getElementMeta = (target) => {
  try {
    return target.getBoundingClientRect();
  } catch (_) {
    throw new Error(
      'Target element is not found on document, please check your `selector` field of steps.'
    );
  }
};
