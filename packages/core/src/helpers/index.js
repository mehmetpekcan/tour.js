import { HIGHLIGHTER } from '../components/Highlighter/constants';
import {
  TOOLTIP,
  TOOLTIP_BUTTON,
  TOOLTIP_NEXT_BUTTON,
  TOOLTIP_PREV_BUTTON,
  TOOLTIP_FINISH_BUTTON,
  TOOLTIP_FOOTER,
  TOOLTIP_CONTENT,
  TOOLTIP_TITLE,
} from '../components/Tooltip/constants';

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
  const style = document.createElement('style');

  // TODO: inject component styles with in their components
  style.id = 'tour--js-styles';
  style.innerHTML = `
    .${TOOLTIP_BUTTON.class} { ${TOOLTIP_BUTTON.css} }
    .visible { opacity: 1 !important; }
    .hidden { opacity: 0 !important; }
    .tour--js-target { z-index: 99999 !important; }
  `;

  document.head.appendChild(style);
};

export const removeDefaultStyles = () => {
  const styleElement = document.querySelector('#tour--js-styles');
  document.head.removeChild(styleElement);
};
