import * as templates from './constants/templates';
import { HIGHLIGHTER_PADDING } from './constants/styles';
import {
  CSS_MIXINS,
  createElementFromHTML,
  getElementMeta,
  addStyles,
} from './helpers';

const Tour = ({ steps = [] }) => {
  if (steps.length === 0) {
    throw new Error('Steps cannot be empty');
  }

  let [activeElement] = steps;
  let overlayElement, highlighterElement, tooltipElement;

  const onWindowResize = () => {
    const targetMeta = getElementMeta(activeElement);

    placeHighlighter(targetMeta);
    placeTooltip(targetMeta);
  };

  const initialize = () => {
    overlayElement = createElementFromHTML(templates.OVERLAY);
    tooltipElement = createElementFromHTML(templates.TOOLTIP);
    highlighterElement = createElementFromHTML(templates.HIGHLIGHTER);
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

    activeElement = document.querySelector(activeElement.selector);
    document.body.append(overlayElement, highlighterElement, tooltipElement);
    window.addEventListener('resize', () => onWindowResize(activeElement));

    const targetMeta = getElementMeta(activeElement);

    addStyles(overlayElement, CSS_MIXINS.visible);
    addStyles(activeElement, 'z-index: 999;');

    placeHighlighter(targetMeta);
    placeTooltip(targetMeta);
  };

  return {
    steps,
    start,
  };
};

export default Tour;
