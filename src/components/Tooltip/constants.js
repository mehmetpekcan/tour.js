export const PREV_BUTTON = {
  element({ prev }) {
    return prev
      ? `
        <div>
          <button class='tour--tooltip-prev tour--tooltip-button'>${prev}</button>
        </div>
      `
      : '';
  },
};

export const NEXT_BUTTON = {
  element({ next }) {
    return next
      ? `
        <div>
          <button class='tour--tooltip-next tour--tooltip-button' >${next}</button>
        </div>
      `
      : '';
  },
};

export const FINISH_BUTTON = {
  element({ finish }) {
    return finish
      ? `
        <div>
          <button class='tour--tooltip-finish tour--tooltip-button'>${finish}</button>
        </div>
      `
      : '';
  },
};

export const TOOLTIP = {
  innerElement({ title, content, next, prev, finish }) {
    return `
      ${title ? `<h3 class='tour--tooltip-title'>${title}</h3>` : ''}
      ${content ? `<div class='tour--tooltip-content'>${content}</div>` : ''}
      ${
        prev || next || finish
          ? `
          <div class='tour--tooltip-footer'>
            ${PREV_BUTTON.element({ prev })}
            ${NEXT_BUTTON.element({ next })}
            ${FINISH_BUTTON.element({ finish })}
          </div>
        `
          : ''
      }
    `;
  },
  element(args) {
    return `
      <div class='tour--tooltip-wrapper'>
        ${this.innerElement(args)}
      </div>
    `;
  },
};
