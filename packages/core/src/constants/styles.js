export const HIGHLIGHTER_PADDING = 8;
export const TRANSITION_DURATION = 300;

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
  `,
};

export const HIGHLIGHTER = {
  class: 'tour--highlighter-wrapper',
  css: `
    position: absolute;
    background-color: rgba(255, 255, 255, 0.8);
    z-index: 998;
    opacity: 0;
    visibility: hidden;
    padding: ${HIGHLIGHTER_PADDING}px;
    transition: all ${TRANSITION_DURATION}ms;
    box-shadow: rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px;
    border-radius: 8px;
  `,
};

export const TOOLTIP_TITLE = {
  class: 'tour--tooltip-title',
  css: `
    font-weight: 700;
    font-size: 24px;
  `,
};

export const TOOLTIP_CONTENT = {
  class: 'tour--tooltip-content',
  css: `
    color: #2c3e50;
    margin-top: 4px;
    line-height: 24px;
    font-size: 16px;
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
    white-space: nowrap;
    background-color: #4834d4;
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
