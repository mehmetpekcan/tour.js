import * as styles from './styles';

export const OVERLAY = () => `
  <div class="tour--overlay-wrapper" style='${styles.OVERLAY}'></div>
`;

export const HIGHLIGHTER = () => `
  <div class="tour--highlighter-wrapper" style='${styles.HIGHLIGHTER}'></div>
`;

export const INNER_TOOLTIP = ({ title, content, next, prev, finish }) => `
  ${title ? `<div class='tour--tooltip-title'>${title}</div>` : ''}
  ${content ? `<div class='tour--tooltip-content'>${content}</div>` : ''}
  <div class="tour--tooltip-footer">
    ${prev ? `<button class='tour--tooltip-prev'>${prev}</button>` : ''}
    ${next ? `<button class='tour--tooltip-next'>${next}</button>` : ''}
    ${finish ? `<button class='tour--tooltip-finish'>${finish}</button>` : ''}
  </div>
`;

export const TOOLTIP = ({ prev, next, title, content }) => `
  <div class='tour--tooltip-wrapper' style='${styles.TOOLTIP}'>
    ${INNER_TOOLTIP({ prev, next, title, content })}
  </div>
`;
