import { TRANSITION_DURATION } from '../../constants';

export const TOOLTIP_TITLE = {
  class: 'tour--tooltip-title',
  css: `
    font-weight: 700;
    font-size: 24px;
    overflow-wrap: break-word;
    line-height: 1.5;
  `,
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
};

export const TOOLTIP_NEXT_BUTTON = {
  class: 'tour--tooltip-next',
  css: `
  `,
};

export const TOOLTIP_FINISH_BUTTON = {
  class: 'tour--tooltip-finish',
  css: `
    background-color: #eb4d4b;
  `,
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
  innerElement({ title, content, next, prev, finish, isEditMode }) {
    return `
      ${
        title
          ? `<div class='${TOOLTIP_TITLE.class}' contenteditable='${isEditMode}'>${title}</div>`
          : ''
      }
      ${
        content
          ? `<div class='${TOOLTIP_CONTENT.class}' contenteditable='${isEditMode}'>${content}</div>`
          : ''
      }
      <div class='${TOOLTIP_FOOTER.class}' contenteditable='${isEditMode}'>
        ${
          prev
            ? `<button class='${TOOLTIP_BUTTON.class} ${TOOLTIP_PREV_BUTTON.class}' contenteditable='${isEditMode}'>${prev}</button>`
            : ''
        }
        ${
          next
            ? `<button class='${TOOLTIP_BUTTON.class} ${TOOLTIP_NEXT_BUTTON.class}' contenteditable='${isEditMode}'>${next}</button>`
            : ''
        }
        ${
          finish
            ? `<button class='${TOOLTIP_BUTTON.class} ${TOOLTIP_FINISH_BUTTON.class}' contenteditable='${isEditMode}'>${finish}</button>`
            : ''
        }
      </div>
    `;
  },
  element(args) {
    return `
      <div class='${this.class}'>
        ${this.innerElement(args)}
        ${
          args.isEditMode
            ? `
              <button id='tour--toultip-edit-success' style='position:absolute;bottom:-62px;left:0;'>Done</button>
              <button id='tour--toultip-edit-failed' style='position:absolute;bottom:-62px;left:84px;'>Cancel</button>
              `
            : ''
        }
      </div>
    `;
  },
};
