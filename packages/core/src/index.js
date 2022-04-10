import * as templates from './constants/templates';
import { HIGHLIGHTER_PADDING } from './constants/styles';
import {
  CSS_MIXINS,
  createElementFromHTML,
  getElementMeta,
  addStyles,
  injectDefaultStyles,
  removeDefaultStyles,
} from './helpers';

const defaultTooltipOptions = {
  next: 'Next',
  prev: 'Previous',
  header: 'Header',
  body: 'Hulog',
};

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
      tooltipElement.classList.add('visible');

      addStyles(
        tooltipElement,
        `${CSS_MIXINS.position({
          top: top + height + HIGHLIGHTER_PADDING + 16,
          left: left - HIGHLIGHTER_PADDING,
        })}
        `
      );
    }, 0);
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
      highlighterElement.classList.add('visible');

      addStyles(
        highlighterElement,
        `
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
    onNext: () => changeStep('NEXT'),
    // eslint-disable-next-line no-use-before-define
    onPrev: () => changeStep('PREV'),
    // eslint-disable-next-line no-use-before-define
    onFinish: handleFinishButton,
  });
  const highlighter = Highlighter();

  const placeWorker = () => {
    tooltip.render(
      elements[currentIndex],
      steps[currentIndex],
      currentIndex,
      steps.length
    );
    highlighter.render(elements[currentIndex]);
    elements[currentIndex].classList.add('tour--js-target');
  };

  const initialize = () => {
    injectDefaultStyles();
    elements = steps.map((step) => document.querySelector(step.selector));
    placeWorker();
  };

  function handleFinishButton() {
    tooltip.remove();
    highlighter.remove();
    currentIndex = 0;
    removeDefaultStyles();
  }

  const clearPreviousWorker = (oldIndex) => {
    elements[oldIndex].classList.remove('tour--js-target');
  };

  const changeStep = (move) => {
    const oldIndex = currentIndex;

    if (move === 'NEXT') {
      currentIndex += 1;
    } else if (move === 'PREV') {
      currentIndex -= 1;
    }

    placeWorker();
    clearPreviousWorker(oldIndex);
  };

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
