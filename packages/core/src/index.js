import Tooltip from './components/Tooltip';
import Highlighter from './components/Highlighter';

import { injectDefaultStyles, removeDefaultStyles } from './helpers';

const Tour = ({ steps = [] }) => {
  if (steps.length === 0) {
    throw new Error('Steps cannot be empty');
  }

  let elements;
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

  const changeStep = (newCurrentIndex) => {
    clearPreviousWorker(currentIndex);
    currentIndex = newCurrentIndex;
    placeWorker(currentIndex);
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
