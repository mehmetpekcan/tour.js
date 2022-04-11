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
    .${HIGHLIGHTER.class} { ${HIGHLIGHTER.css} }
    .${TOOLTIP.class} { ${TOOLTIP.css} }
    .${TOOLTIP_BUTTON.class} { ${TOOLTIP_BUTTON.css} }
    .${TOOLTIP_NEXT_BUTTON.class} { ${TOOLTIP_NEXT_BUTTON.css} }
    .${TOOLTIP_PREV_BUTTON.class} { ${TOOLTIP_PREV_BUTTON.css} }
    .${TOOLTIP_FINISH_BUTTON.class} { ${TOOLTIP_FINISH_BUTTON.css} }
    .${TOOLTIP_FOOTER.class} { ${TOOLTIP_FOOTER.css} }
    .${TOOLTIP_CONTENT.class} { ${TOOLTIP_CONTENT.css} }
    .${TOOLTIP_TITLE.class} { ${TOOLTIP_TITLE.css} }
    .visible { visibility: visible; opacity: 1; }
    .hidden { visibility: none; opacity: 0; }
    .tour--js-target { z-index: 99999; }
  `;

  document.head.appendChild(style);
};

export const removeDefaultStyles = () => {
  const styleElement = document.querySelector('#tour--js-styles');
  document.head.removeChild(styleElement);
};
