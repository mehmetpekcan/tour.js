export const HIGHLIGHTER_PADDING = 16;
export const TRANSITION_DURATION = 2000;

export const OVERLAY = `
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, .2);
  z-index: 98;
  opacity: 0;
  visibility: hidden;
  transition: all ${TRANSITION_DURATION}ms;
`;

export const TOOLTIP = `
  position: absolute;
  width: 200px;
  height: 200px;
  z-index: 99;
  opacity: 0;
  background-color: rgba(255, 255,255, .9);
  transition: all ${TRANSITION_DURATION}ms;
`;

export const HIGHLIGHTER = `
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 998;
  border: 1px solid green;
  opacity: 0;
  visibility: hidden;
  padding: ${HIGHLIGHTER_PADDING}px;
  transition: all ${TRANSITION_DURATION}ms;
`;
