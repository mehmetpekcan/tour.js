import Tooltip from './components/Tooltip';
import Highlighter from './components/Highlighter';

import {
  getElementMeta,
  injectDefaultStyles,
  removeDefaultStyles,
} from './helpers';

const Tour = ({ steps = [] } = {}) => {
  let currentIndex = 0;

  const highlighter = Highlighter();
  const tooltip = new Tooltip({
    // eslint-disable-next-line no-use-before-define
    onNext: () => changeStep(currentIndex + 1),
    // eslint-disable-next-line no-use-before-define
    onPrev: () => changeStep(currentIndex - 1),
    // eslint-disable-next-line no-use-before-define
    onFinish: handleFinishButton,
  });

  const placeWorker = ({ selector, target, ...content }) => {
    let targetElement;

    if (target) {
      targetElement = target;
    } else if (selector) {
      targetElement = document.querySelector(selector);
    } else {
      throw new Error('Please provide at least target element or selector');
    }

    const targetPosition = getElementMeta(targetElement);

    tooltip.render(targetPosition, content);
    highlighter.render(targetPosition, {});
    targetElement.classList.add('tour--js-target');
  };

  function handleFinishButton() {
    tooltip.remove();
    highlighter.remove();
    currentIndex = 0;
    removeDefaultStyles();
  }

  const clearPreviousWorker = (oldIndex) => {
    document
      .querySelector(steps[oldIndex].selector)
      .classList.remove('tour--js-target');
  };

  const changeStep = (newCurrentIndex) => {
    clearPreviousWorker(currentIndex);
    currentIndex = newCurrentIndex;
    placeWorker(steps[newCurrentIndex]);
  };

  const start = () => {
    if (steps.length === 0) {
      throw new Error('Steps cannot be empty');
    }

    injectDefaultStyles();
    placeWorker(steps[0]);

    window.addEventListener('resize', () => {
      placeWorker(steps[currentIndex]);
    });
  };

  const createStep = (target) => {
    const basicStep = {
      target,
      title: 'Click to change title 📌',
      content: 'Click for changing content...',
      isEditMode: true,
    };

    tooltip.onEditPositive = () => {
      console.log('Positive');
    };

    tooltip.onEditNegative = () => {
      console.log('Negative');
    };

    injectDefaultStyles();
    placeWorker(basicStep);

    window.addEventListener('resize', () => {
      placeWorker(basicStep);
    });
  };

  return {
    // options: {},
    steps,
    start,
    createStep,
  };
};

export default Tour;
