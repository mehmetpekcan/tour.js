import { BUTTON } from '../components/Tooltip/constants';

export const getInnerText = (selector) =>
  document.querySelector(selector)?.innerText || null;

export const insertElement = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

export const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html;

  return template.content.firstElementChild;
};

export const getElementMeta = (element) => element.getBoundingClientRect();

export const injectDefaultStyles = () => {
  // const style = document.createElement('style');

  // // TODO: inject component styles with in their components
  // style.id = 'tour--js-styles';
  // style.innerHTML = `
  //   .${BUTTON.class} { ${BUTTON.css} }
  //   .visible { opacity: 1 !important; }
  //   .hidden { opacity: 0 !important; }
  //   .tour--js-target { z-index: 99999 !important; }
  // `;

  // document.head.appendChild(style);

  // Get HTML head element
  const head = document.getElementsByTagName('HEAD')[0];

  // Create new link Element
  const link = document.createElement('link');

  // set the attributes for link element
  link.rel = 'stylesheet';

  link.type = 'text/css';

  link.href = '../../css/style.css';

  // Append link element to HTML head
  head.appendChild(link);
};

export const removeDefaultStyles = () => {
  const styleElement = document.querySelector('#tour--js-styles');
  document.head.removeChild(styleElement);
};
