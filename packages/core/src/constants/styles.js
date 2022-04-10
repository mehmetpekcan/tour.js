export const HIGHLIGHTER_PADDING = 16;
export const TRANSITION_DURATION = 300;

export const OVERLAY = {
  class: 'tour--overlay-wrapper',
  css: `
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, .2);
    z-index: 98;
    opacity: 0;
    visibility: hidden;
    transition: all ${TRANSITION_DURATION}ms;
  `,
};

export const TOOLTIP = {
  class: 'tour--tooltip-wrapper',
  css: `
    position: absolute;
    width: 200px;
    padding: 16px;
    z-index: 99;
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
    border: 1px solid green;
    opacity: 0;
    visibility: hidden;
    padding: ${HIGHLIGHTER_PADDING}px;
    transition: all ${TRANSITION_DURATION}ms;
  `,
};
