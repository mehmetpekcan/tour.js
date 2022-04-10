import * as styles from './styles';

export const HIGHLIGHTER = () => `
  <div class='${styles.HIGHLIGHTER.class}'></div>
`;

export const INNER_TOOLTIP = ({ title, content, next, prev, finish }) => `
  ${title ? `<div class='${styles.TOOLTIP_TITLE.class}'>${title}</div>` : ''}
  ${
    content
      ? `<div class='${styles.TOOLTIP_CONTENT.class}'>${content}</div>`
      : ''
  }
  <div class='${styles.TOOLTIP_FOOTER.class}'>
    ${
      prev
        ? `<button class='${styles.TOOLTIP_BUTTON.class} ${styles.TOOLTIP_PREV_BUTTON.class}'>${prev}</button>`
        : ''
    }
    ${
      next
        ? `<button class='${styles.TOOLTIP_BUTTON.class} ${styles.TOOLTIP_NEXT_BUTTON.class}'>${next}</button>`
        : ''
    }
    ${
      finish
        ? `<button class='${styles.TOOLTIP_BUTTON.class} ${styles.TOOLTIP_FINISH_BUTTON.class}'>${finish}</button>`
        : ''
    }
  </div>

`;

export const TOOLTIP = ({ prev, next, title, content }) => `
  <div class='${styles.TOOLTIP.class}'>
    ${INNER_TOOLTIP({ prev, next, title, content })}
  </div>
`;
