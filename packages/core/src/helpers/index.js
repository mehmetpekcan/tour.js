import * as styles from '../constants/styles';

export const insertElement = (newNode, existingNode) => {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
};

export const createElementFromHTML = (html) => {
  const template = document.createElement('template');
  template.innerHTML = html;

  return template.content.childNodes[1];
};

export const getElementMeta = (element) => element.getBoundingClientRect();

export const injectDefaultStyles = () => {
  const style = document.createElement('style');

  style.id = 'tour--js-styles';
  style.innerHTML = `
    .${styles.HIGHLIGHTER.class} { ${styles.HIGHLIGHTER.css} }
    .${styles.TOOLTIP.class} { ${styles.TOOLTIP.css} }
    .${styles.TOOLTIP_BUTTON.class} { ${styles.TOOLTIP_BUTTON.css} }
    .${styles.TOOLTIP_NEXT_BUTTON.class} { ${styles.TOOLTIP_NEXT_BUTTON.css} }
    .${styles.TOOLTIP_PREV_BUTTON.class} { ${styles.TOOLTIP_PREV_BUTTON.css} }
    .${styles.TOOLTIP_FINISH_BUTTON.class} { ${styles.TOOLTIP_FINISH_BUTTON.css} }
    .${styles.TOOLTIP_FOOTER.class} { ${styles.TOOLTIP_FOOTER.css} }
    .${styles.TOOLTIP_CONTENT.class} { ${styles.TOOLTIP_CONTENT.css} }
    .${styles.TOOLTIP_TITLE.class} { ${styles.TOOLTIP_TITLE.css} }
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
