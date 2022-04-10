export const HIGHLIGHTER_PADDING = 8;
export const TRANSITION_DURATION = 300;

export const TOOLTIP = {
  class: 'tour--tooltip-wrapper',
  css: `
    position: absolute;
    width: 200px;
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
