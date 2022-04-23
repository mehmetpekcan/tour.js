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

export const TOOLTIP_EDITOR = {
  class: 'tour-tooltip-editor',
  css: ``,
  element() {
    return `
      <div class="${this.class}}">
        <button class="tour--tooltip-edit-positive">Done</button>
        <button class="tour--tooltip-edit-negative">Cancel</button>
        <button class="tour--tooltip-edit-next">Add Next Button</button>
        <button class="tour--tooltip-edit-prev">Add Prev Button</button>
        <button class="tour--tooltip-edit-finish">Add Finish Button</button>
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
  innerElement({ title, content, next, prev, finish, isEditMode }) {
    return `
      ${
        title
          ? `<div class='${TOOLTIP_TITLE.class}' contenteditable='${isEditMode}' style='${TOOLTIP_TITLE.css}'>${title}</div>`
          : ''
      }
      ${
        content
          ? `<div class='${TOOLTIP_CONTENT.class}' contenteditable='${isEditMode}' style='${TOOLTIP_CONTENT.css}'>${content}</div>`
          : ''
      }
      <div class='${
        TOOLTIP_FOOTER.class
      }' contenteditable='${isEditMode}' style='${TOOLTIP_FOOTER.css}'>
        ${
          prev
            ? `<button class='${TOOLTIP_BUTTON.class} ${TOOLTIP_PREV_BUTTON.class}' contenteditable='${isEditMode}' style='${TOOLTIP_PREV_BUTTON.css}'>${prev}</button>`
            : ''
        }
        ${
          next
            ? `<button class='${TOOLTIP_BUTTON.class} ${TOOLTIP_NEXT_BUTTON.class}' contenteditable='${isEditMode}' style='${TOOLTIP_NEXT_BUTTON.css}'>${next}</button>`
            : ''
        }
        ${
          finish
            ? `<button class='${TOOLTIP_BUTTON.class} ${TOOLTIP_FINISH_BUTTON.class}' contenteditable='${isEditMode}' style='${TOOLTIP_FINISH_BUTTON.css}'>${finish}</button>`
            : ''
        }
      </div>
    `;
  },
  element(args) {
    return `
      <div class='${this.class}' style='${this.css}'>
        ${this.innerElement(args)}
        ${args.isEditMode ? TOOLTIP_EDITOR.element() : ''}
      </div>
    `;
  },
};
