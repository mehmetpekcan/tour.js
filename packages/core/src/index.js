import * as templates from './constants/templates';
import { HIGHLIGHTER_PADDING } from './constants/styles';
import {
  CSS_MIXINS,
  createElementFromHTML,
  getElementMeta,
  addStyles,
} from './helpers';

const defaultTooltipOptions = {
  next: 'Next',
  prev: 'Previous',
  header: 'Header',
  body: 'Hulog',
};

const defaultOverlayOptions = {};

const defaultHighlighterOptions = {};

const Tooltip = ({ onNext, onPrev, onFinish }) => {
  let tooltipElement;

  const remove = () => {
    tooltipElement.outerHTML = null;
  };

  const render = (
    targetElement = null,
    options = {},
    index = 0,
    length = 0
  ) => {
    tooltipElement = document.querySelector('.tour--tooltip-wrapper');
    const args = { ...defaultTooltipOptions, ...options };

    if (index === 0) {
      args.prev = null;
    } else if (index === length - 1) {
      args.next = null;
    }

    if (!tooltipElement) {
      const tooltipHTML = templates.TOOLTIP(args);

      tooltipElement = createElementFromHTML(tooltipHTML);
      document.body.append(tooltipElement);
    } else {
      tooltipElement.innerHTML = templates.INNER_TOOLTIP(args);
    }

    const nextButton = document.querySelector('.tour--tooltip-next');
    const prevButton = document.querySelector('.tour--tooltip-prev');
    const finishButton = document.querySelector('.tour--tooltip-finish');

    if (nextButton) {
      nextButton.addEventListener('click', function onClick() {
        onNext();
        nextButton.removeEventListener('click', onClick);
      });
    }

    if (prevButton) {
      prevButton.addEventListener('click', function onClick() {
        onPrev();
        prevButton.removeEventListener('click', onClick);
      });
    }

    if (finishButton) {
      finishButton.addEventListener('click', function onClick() {
        onFinish();
        finishButton.removeEventListener('click', onClick);
      });
    }

    setTimeout(() => {
      const { height, top, left } = getElementMeta(targetElement);

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
    }, 0);
  };

  return { render, remove };
};

const Overlay = () => {
  let overlayElement;

  const render = (options = {}) => {
    overlayElement = document.querySelector('.tour--overlay-wrapper');

    if (!overlayElement) {
      const args = { ...defaultOverlayOptions, ...options };
      const overlayHTML = templates.OVERLAY(args);

      overlayElement = createElementFromHTML(overlayHTML);
      document.body.append(overlayElement);

      setTimeout(() => {
        addStyles(overlayElement, CSS_MIXINS.visible);
      }, 0);
    }
  };

  const remove = () => {
    overlayElement.outerHTML = null;
  };

  return { render, remove };
};

const Highlighter = () => {
  let highlighterElement;

  const render = (targetElement, options = {}) => {
    highlighterElement = document.querySelector('.tour--highlighter-wrapper');

    if (!highlighterElement) {
      const args = { ...defaultHighlighterOptions, ...options };
      const highlighterHTML = templates.HIGHLIGHTER(args);

      highlighterElement = createElementFromHTML(highlighterHTML);
      document.body.append(highlighterElement);
    }

    setTimeout(() => {
      const { width, height, top, left } = getElementMeta(targetElement);

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
    }, 0);
  };

  const remove = () => {
    highlighterElement.outerHTML = null;
  };

  return { render, remove };
};

const Tour = ({ steps = [] }) => {
  if (steps.length === 0) {
    throw new Error('Steps cannot be empty');
  }

  let elements;
  let currentIndex = 0;

  const tooltip = Tooltip({
    // eslint-disable-next-line no-use-before-define
    onNext: handleNextButton,
    // eslint-disable-next-line no-use-before-define
    onPrev: handlePreviousButton,
    // eslint-disable-next-line no-use-before-define
    onFinish: handleFinishButton,
  });
  const overlay = Overlay();
  const highlighter = Highlighter();

  const initialize = async () => {
    elements = steps.map((step) => document.querySelector(step.selector));

    tooltip.render(
      elements[currentIndex],
      steps[currentIndex],
      currentIndex,
      steps.length
    );
    highlighter.render(elements[currentIndex]);
    overlay.render();
  };

  const placeWorker = () => {
    tooltip.render(
      elements[currentIndex],
      steps[currentIndex],
      currentIndex,
      steps.length
    );
    highlighter.render(elements[currentIndex]);
    overlay.render();

    addStyles(elements[currentIndex], 'z-index: 999;');
  };

  function handleFinishButton() {
    tooltip.remove();
    overlay.remove();
    highlighter.remove();
    currentIndex = 0;
  }

  function handleNextButton() {
    currentIndex += 1;
    placeWorker();
  }

  function handlePreviousButton() {
    currentIndex -= 1;
    placeWorker();
  }

  const start = () => {
    initialize();
    window.addEventListener('resize', placeWorker);
  };

  return {
    // options: {},
    steps,
    start,
  };
};

export default Tour;
