import { TRANSITION_DURATION } from '../../constants';

export const TITLE = {
  class: 'tour--tooltip-title',
  css: `
    font-weight: 700;
    font-size: 24px;
    overflow-wrap: break-word;
    line-height: 1.5;
  `,
};

export const CONTENT = {
  class: 'tour--tooltip-content',
  css: `
    color: #2c3e50;
    margin-top: 4px;
    line-height: 24px;
    font-size: 16px;
    overflow-wrap: break-word;
    line-height: 1.5;
  `,
};

export const BUTTON = {
  class: 'tour--tooltip-button',
  css: `
    cursor: pointer;
    letter-spacing: .2px;
    border: 0;
    outline: 0;
    border-radius: 4px;
    padding: 8px 16px;
    font-size: 14px;
    box-shadow: 0 5px 20px 10px rgba(0, 0, 0, .1);
    color: #ecf0f1;
    background-color: #4834d4;
    overflow-wrap: break-word;
    line-height: 1.5;
  `,
};

export const PREV_BUTTON = {
  class: 'tour--tooltip-prev',
  css: `
  `,
  element({ prev, isEditMode = false }) {
    return prev
      ? `
        <div>
          <button class='${this.class} ${BUTTON.class}' contenteditable='${isEditMode}' style='${this.css}'>${prev}</button>
        </div>
      `
      : '';
  },
};

export const NEXT_BUTTON = {
  class: 'tour--tooltip-next',
  wrapperCSS: `
    margin-left: auto;
  `,
  css: `
  `,
  element({ next, isEditMode = false }) {
    return next
      ? `
        <div style='${this.wrapperCSS}'>
          <button class='${this.class} ${BUTTON.class}' contenteditable='${isEditMode}' style='${this.css}'>${next}</button>
        </div>
      `
      : '';
  },
};

export const FINISH_BUTTON = {
  class: 'tour--tooltip-finish',
  css: `
    background-color: #eb4d4b;
  `,
  element({ finish, isEditMode = false }) {
    return finish
      ? `
        <div>
          <button class='${this.class} ${BUTTON.class}' contenteditable='${isEditMode}' style='${this.css}'>${finish}</button>
        </div>
      `
      : '';
  },
};

export const FOOTER = {
  class: 'tour--tooltip-footer',
  css: `
    margin-top: 16px;
    display: flex;
    gap: 8px;
  `,
};

export const TOOLTIP = {
  class: 'tour--tooltip-wrapper',
  css: `
    position: absolute;
    width: 350px;
    min-width: 350px;
    max-width: 500px;
    padding: 24px;
    z-index: 999;
    opacity: 0;
    border-radius: 8px;
    box-shadow: 0 0 30px 0 rgba(0, 0, 0, .1);
    background-color: rgba(255, 255,255, .9);
    transition: all ${TRANSITION_DURATION}ms;
    line-height: 1.5;
  `,
  innerElement({ title, content, next, prev, finish, isEditMode }) {
    return `
      ${
        title
          ? `<h3 class='${TITLE.class}' contenteditable='${isEditMode}' style='${TITLE.css}'>${title}</h3>`
          : ''
      }
      ${
        content
          ? `<div class='${CONTENT.class}' contenteditable='${isEditMode}' style='${CONTENT.css}'>${content}</div>`
          : ''
      }
      ${
        prev || next || finish
          ? `
          <div class='${FOOTER.class}' style='${FOOTER.css}'>
            ${PREV_BUTTON.element({ prev, isEditMode })}
            ${NEXT_BUTTON.element({ next, isEditMode })}
            ${FINISH_BUTTON.element({ finish, isEditMode })}
          </div>
        `
          : ''
      }
    `;
  },
  element(args) {
    return `
      <div class='${this.class}' style='${this.css}'>
        ${this.innerElement(args)}
      </div>
    `;
  },
};
