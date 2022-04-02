const TOUR_WORKER_OVERLAY = `
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, .2);
  z-index: 98;
  opacity: 0;
  visibility: hidden;
  transition: all var(--transition-duration);
`;

const TOUR_WORKER_TOOLTIP = `
  position: absolute;
  padding: 24px;
  top: 24px;
  left: 24px;
  z-index: 99;
  opacity: 0;
  background-color: rgba(255, 255,255, .9);
  transition: all var(--transition-duration);
`;

const TOUR_WORKER_HIGHLIGHTER = `
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  z-index: 998;
  border: 1px solid red;
  opacity: 0;
  padding: 16px;
  visibility: hidden;
  transition: all var(--transition-duration);
`;

export default {
  TOUR_WORKER_OVERLAY,
  TOUR_WORKER_HIGHLIGHTER,
  TOUR_WORKER_TOOLTIP,
};
