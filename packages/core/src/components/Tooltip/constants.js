import { TRANSITION_DURATION } from '../../constants';

export const TOOLTIP_TITLE = {
  class: 'tour--tooltip-title',
  css: `
    font-weight: 700;
    font-size: 24px;
    overflow-wrap: break-word;
    line-height: 1.5;
  `,
  element(data) {
    return data ? `<div class='${TOOLTIP_TITLE.class}'>${data}</div>` : '';
  },
};

export const TOOLTIP_CONTENT = {
  class: 'tour--tooltip-content',
  css: `
    color: #2c3e50;
    margin-top: 4px;
    line-height: 24px;
    font-size: 16px;
    overflow-wrap: break-word;
    line-height: 1.5;
  `,
  element(data) {
    return data ? `<div class='${TOOLTIP_CONTENT.class}'>${data}</div>` : '';
  },
};

export const TOOLTIP_BUTTON = {
  class: 'tour--tooltip-button',
  css: `
    letter-spacing: .2px;
    border: 0;
    outline: 0;
    padding: 8px 16px;
    font-size: 14px;
    box-shadow: 0 5px 20px 10px rgba(0, 0, 0, .1);
    color: #ecf0f1;
    background-color: #4834d4;
    overflow-wrap: break-word;
    line-height: 1.5;
  `,
};

export const TOOLTIP_PREV_BUTTON = {
  class: 'tour--tooltip-prev',
  css: `
  `,
  element(data) {
    return data
      ? `<button class='${TOOLTIP_BUTTON.class} ${TOOLTIP_PREV_BUTTON.class}'>${data}</button>`
      : '';
  },
};

export const TOOLTIP_NEXT_BUTTON = {
  class: 'tour--tooltip-next',
  css: `
  `,
  element(data) {
    return data
      ? `<button class='${TOOLTIP_BUTTON.class} ${TOOLTIP_NEXT_BUTTON.class}'>${data}</button>`
      : '';
  },
};

export const TOOLTIP_FINISH_BUTTON = {
  class: 'tour--tooltip-finish',
  css: `
    background-color: #eb4d4b;
  `,
  element(data) {
    return data
      ? `<button class='${TOOLTIP_BUTTON.class} ${TOOLTIP_FINISH_BUTTON.class}'>${data}</button>`
      : '';
  },
};

export const TOOLTIP_FOOTER = {
  class: 'tour--tooltip-footer',
  css: `
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 12px;
    overflow-wrap: break-word;
  `,
  element(data) {
    return `
      <div class='${TOOLTIP_FOOTER.class}'>
        ${TOOLTIP_PREV_BUTTON.element(data.prev)}
        ${TOOLTIP_NEXT_BUTTON.element(data.next)}
        ${TOOLTIP_FINISH_BUTTON.element(data.finish)}
       </div>
    `;
  },
};

export const TOOLTIP = {
  class: 'tour--tooltip-wrapper',
  css: `
    position: absolute;
    width: 300px;
    max-width: 300px;
    padding: 16px;
    z-index: 999;
    opacity: 0;
    border-radius: 8px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, .1);
    background-color: rgba(255, 255,255, .9);
    transition: all ${TRANSITION_DURATION}ms;
    line-height: 1.5;
  `,
  innerElement({ title, content, next, prev, finish }) {
    return `
      ${TOOLTIP_TITLE.element(title)}
      ${TOOLTIP_CONTENT.element(content)}
      ${TOOLTIP_FOOTER.element({ next, prev, finish })}
    `;
  },
  element({ prev, next, title, content }) {
    return `
      <div class='${this.class}'>
        ${this.innerElement({ prev, next, title, content })}
      </div>
    `;
  },
};
