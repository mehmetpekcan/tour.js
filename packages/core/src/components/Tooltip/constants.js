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
      ? `<button class='${BUTTON.class} ${this.class}' contenteditable='${isEditMode}' style='${this.css}'>${prev}</button>`
      : '';
  },
};

export const NEXT_BUTTON = {
  class: 'tour--tooltip-next',
  css: `
  `,
  element({ next, isEditMode = false }) {
    return next
      ? `<button class='${BUTTON.class} ${this.class}' contenteditable='${isEditMode}' style='${this.css}'>${next}</button>`
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
      ? `<button class='${BUTTON.class} tour--tooltip-finish ${this.class}' contenteditable='${isEditMode}' style='${this.css}'>${finish}</button>`
      : '';
  },
};

export const FOOTER = {
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

export const EDITOR = {
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
          ? `<div class='${TITLE.class}' contenteditable='${isEditMode}' style='${TITLE.css}'>${title}</div>`
          : ''
      }
      ${
        content
          ? `<div class='${CONTENT.class}' contenteditable='${isEditMode}' style='${CONTENT.css}'>${content}</div>`
          : ''
      }
      <div class='${FOOTER.class}' contenteditable='${isEditMode}' style='${
      FOOTER.css
    }'>
        ${PREV_BUTTON.element({ prev, isEditMode })}
        ${NEXT_BUTTON.element({ next, isEditMode })}
        ${FINISH_BUTTON.element({ finish, isEditMode })}
      </div>
    `;
  },
  element(args) {
    return `
      <div class='${this.class}' style='${this.css}'>
        ${this.innerElement(args)}
        ${args.isEditMode ? EDITOR.element() : ''}
      </div>
    `;
  },
};
