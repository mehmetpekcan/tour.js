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

  let overlayElement;
  let highlighterElement;
  let tooltipElement;

  const worker = {
    previous: null,
    current: steps[0],
    next: steps.length > 1 ? steps[1] : null,
  };

  const initialize = () => {
    overlayElement = createElementFromHTML(templates.OVERLAY);
    tooltipElement = createElementFromHTML(templates.TOOLTIP);
    highlighterElement = createElementFromHTML(templates.HIGHLIGHTER);
  };

  const placeHighlighter = () => {
    const { width, height, top, left } = worker.current.meta;

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

  const placeTooltip = () => {
    const { height, top, left } = worker.current.meta;

    addStyles(
      tooltipElement,
      `
        ${CSS_MIXINS.visible}
        ${CSS_MIXINS.position({
          top: top + height + HIGHLIGHTER_PADDING + 16,
          left: left - HIGHLIGHTER_PADDING,
        })}
      `
    );
  };

  const onWindowResize = () => {
    worker.current.meta = getElementMeta(worker.current.element);

    placeHighlighter();
    placeTooltip();
  };

  const start = () => {
    initialize();

    worker.current.element = document.querySelector(worker.current.selector);

    if (worker.next) {
      worker.next.element = document.querySelector(worker.next.selector);
    }

    document.body.append(overlayElement, highlighterElement, tooltipElement);
    window.addEventListener('resize', onWindowResize);

    addStyles(overlayElement, CSS_MIXINS.visible);
    addStyles(worker.current.element, 'z-index: 999;');

    worker.current.meta = getElementMeta(worker.current.element);

    placeHighlighter();
    placeTooltip();
  };

  return {
    steps,
    start,
  };
};

export default Tour;
