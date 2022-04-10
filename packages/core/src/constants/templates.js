import * as styles from './styles';

export const HIGHLIGHTER = () => `
  <div class='${styles.HIGHLIGHTER.class}'></div>
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
  <div class='${styles.TOOLTIP.class}'>
    ${INNER_TOOLTIP({ prev, next, title, content })}
  </div>
`;
