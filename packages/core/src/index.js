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
  const tooltip = Tooltip({
    // eslint-disable-next-line no-use-before-define
    onNext: () => changeStep(currentIndex + 1),
    // eslint-disable-next-line no-use-before-define
    onPrev: () => changeStep(currentIndex - 1),
    // eslint-disable-next-line no-use-before-define
    onFinish: handleFinishButton,
  });

  const placeWorker = (stepIndex) => {
    const { selector, ...content } = steps[stepIndex];
    const targetElement = document.querySelector(selector);
    const targetPosition = getElementMeta(targetElement);

    tooltip.render(
      targetPosition,
      content,
      stepIndex !== 0,
      stepIndex !== steps.length - 1
    );
    highlighter.render(targetPosition, {});
    targetElement.classList.add('tour--js-target');
  };

  const initialize = () => {
    injectDefaultStyles();
    placeWorker(0);
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
    placeWorker(newCurrentIndex);
  };

  const start = () => {
    if (steps.length === 0) {
      throw new Error('Steps cannot be empty');
    }

    initialize();
    window.addEventListener('resize', () => {
      placeWorker(currentIndex);
    });
  };

  const createStep = (selector) => {
    steps.push({
      selector,
      title: 'Click to change title 📌',
      content: 'Click for changing content...',
      isEditMode: true,
    });
    start();
  };

  return {
    // options: {},
    steps,
    start,
    createStep,
  };
};

export default Tour;
