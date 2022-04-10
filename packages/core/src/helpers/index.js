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

export const addStyles = (element, newStyles) => {
  // eslint-disable-next-line no-param-reassign
  element.style.cssText = `${element.style.cssText}${newStyles}`;
};

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
    .tour--js-target { z-index: 99999; transition: z-index 300ms; }
  `;

  document.body.appendChild(style);
};

export const removeDefaultStyles = () => {
  const styleElement = document.querySelector('#tour--js-styles');
  document.body.removeChild(styleElement);
};

export const CSS_MIXINS = {
  position: ({ top, left }) => `
    top: ${top}px;
    left: ${left}px;
  `,
  dimension: ({ width, height }) => `
    width: ${width}px;
    height: ${height}px;
  `,
};
