import styles from "./constants/styles.js";
import { CSS_MIXINS, createElementFromHTML } from "./helpers";

const getElementMeta = (element) => element.getBoundingClientRect();
const addStyles = (element, styles) =>
  (element.style.cssText = `${element.style.cssText}${styles}`);

const Tour = ({ steps = [] }) => {
  if (steps.length === 0) {
    throw new Error("Steps cannot be empty");
  }

  let overlayElement, highlighterElement, tooltipElement;

  const onWindowResize = (element) => {
    addStyles(
      highlighterElement,
      `${CSS_MIXINS.visible}${CSS_MIXINS.position(getElementMeta(element))}`
    );
  };

  const initialize = () => {
    const overlayHTML = `<div class="tour-worker-overlay" style='${styles.TOUR_WORKER_OVERLAY}'></div>`;
    const highlighterHTML = `<div class="tour-worker-highlighter" style='${styles.TOUR_WORKER_HIGHLIGHTER}'></div>`;
    const tooltipHTML = `<div class='tour-worker-tooltip' style='${styles.TOUR_WORKER_TOOLTIP}'></div>`;

    overlayElement = createElementFromHTML(overlayHTML);
    tooltipElement = createElementFromHTML(tooltipHTML);
    highlighterElement = createElementFromHTML(highlighterHTML);
  };

  const start = () => {
    const targetElement = document.querySelector(steps[0].element);
    document.body.append(overlayElement, highlighterElement, tooltipElement);
    window.addEventListener("resize", () => onWindowResize(targetElement));

    console.log(getElementMeta(targetElement));

    addStyles(overlayElement, CSS_MIXINS.visible);
    addStyles(targetElement, "z-index: 999;");
    addStyles(
      highlighterElement,
      `${CSS_MIXINS.visible}${CSS_MIXINS.position(
        getElementMeta(targetElement)
      )}`
    );
  };

  return {
    steps,
    start,
    restart: () => {},
  };
};

export default Tour;
