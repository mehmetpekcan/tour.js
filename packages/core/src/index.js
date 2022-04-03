import { HIGHLIGHTER_PADDING } from "./constants/js";
import {
  CSS_MIXINS,
  createElementFromHTML,
  getElementMeta,
  addStyles,
} from "./helpers";

const Tour = ({ steps = [] }) => {
  if (steps.length === 0) {
    throw new Error("Steps cannot be empty");
  }

  let overlayElement, highlighterElement, tooltipElement;

  const onWindowResize = (element) => {
    const targetMeta = getElementMeta(element);

    placeHighlighter(targetMeta);
    placeTooltip(targetMeta);
  };

  const initialize = () => {
    overlayElement = createElementFromHTML(overlayHTML);
    tooltipElement = createElementFromHTML(tooltipHTML);
    highlighterElement = createElementFromHTML(highlighterHTML);
  };

  const placeHighlighter = ({ width, height, top, left }) => {
    addStyles(
      highlighterElement,
      `
        ${CSS_MIXINS.visible}
        ${CSS_MIXINS.dimension({ width, height })}
        ${CSS_MIXINS.position({
          top: top - HIGHLIGHTER_PADDING,
          left: left - HIGHLIGHTER_PADDING,
        })}
      `
    );
  };

  const placeTooltip = ({ height, top, left }) => {
    addStyles(
      tooltipElement,
      `
        ${CSS_MIXINS.visible}
        ${CSS_MIXINS.position({
          top: top + height + HIGHLIGHTER_PADDING,
          left: left - HIGHLIGHTER_PADDING,
        })}
      `
    );
  };

  const start = () => {
    initialize();

    const targetElement = document.querySelector(steps[0].element);
    document.body.append(overlayElement, highlighterElement, tooltipElement);
    window.addEventListener("resize", () => onWindowResize(targetElement));

    const targetMeta = getElementMeta(targetElement);

    addStyles(overlayElement, CSS_MIXINS.visible);
    addStyles(targetElement, "z-index: 999;");

    placeHighlighter(targetMeta);
    placeTooltip(targetMeta);
  };

  return {
    steps,
    start,
    restart: () => {},
  };
};

export default Tour;
