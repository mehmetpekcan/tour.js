import { TRANSITION_DURATION } from '../../constants';

export const HIGHLIGHTER_BORDER = 8;

export const HIGHLIGHTER = {
  class: 'tour--highlighter-wrapper',
  css: `
    box-sizing: content-box;
    position: absolute;
    z-index: 998;
    opacity: 0;
    border: ${HIGHLIGHTER_BORDER}px solid rgba(255, 255, 255, .8);
    background-color: transparent;
    transition: all ${TRANSITION_DURATION}ms;
    box-shadow: rgba(33, 33, 33, 0.5) 0px 0px 0px 5000px;
    border-radius: 8px;
  `,
  element() {
    return `<div class='${this.class}' style='${this.css}'></div>`;
  },
};
