import Tooltip from '../Tooltip';
import Highlighter from '../Highlighter';

import {
  getElementMeta,
  injectDefaultStyles,
  removeDefaultStyles,
  getInnerText,
} from '../../helpers';

const defaultOptions = { steps: [] };

// TODO: create TourWorker for one level abstraction to keep not reachable all methods
class Tour {
  constructor({ steps } = defaultOptions) {
    this.highlighter = new Highlighter();
    this.tooltip = new Tooltip({
      // eslint-disable-next-line no-use-before-define
      onNext: () => this.changeStep(this.currentIndex + 1),
      // eslint-disable-next-line no-use-before-define
      onPrev: () => this.changeStep(this.currentIndex - 1),
      // eslint-disable-next-line no-use-before-define
      onFinish: () => this.handleFinishButton(),
    });
    this.currentIndex = 0;
    this.steps = steps;
  }

  placeWorker({ target, ...content }) {
    const targetPosition = getElementMeta(target);

    this.tooltip.render(targetPosition, content);
    this.highlighter.render(targetPosition, {});
    target.classList.add('tour--js-target');
  }

  clearTourWorker() {
    this.tooltip.remove();
    this.highlighter.remove();
    removeDefaultStyles();
  }

  handleFinishButton() {
    this.clearTourWorker();
    this.currentIndex = 0;
  }

  clearPreviousWorker(oldIndex) {
    const element = this.steps[oldIndex].target;
    element.classList.remove('tour--js-target');
  }

  changeStep(newCurrentIndex) {
    this.clearPreviousWorker(this.currentIndex);
    this.currentIndex = newCurrentIndex;
    this.placeWorker(this.steps[newCurrentIndex]);
  }

  changeSteps(newSteps) {
    this.steps = newSteps;

    return this;
  }

  start() {
    if (this.steps.length === 0) {
      throw new Error('Steps cannot be empty');
    }

    console.log('here');

    this.steps = this.steps.map((step, index) => {
      const tempStep = step;

      // Set `target` property for every step that has selector
      if (tempStep.selector) {
        tempStep.target = document.querySelector(tempStep.selector);
      }

      if (
        (tempStep.next === null || tempStep.next === undefined) &&
        index < this.steps.length - 1
      ) {
        tempStep.next = 'Next';
      }

      if (
        (tempStep.prev === null || tempStep.prev === undefined) &&
        index !== 0
      ) {
        tempStep.prev = 'Prev';
      }

      if (
        (tempStep.finish === null || tempStep.finish === undefined) &&
        index === this.steps.length - 1
      ) {
        tempStep.finish = 'Finish';
      }

      if (index === this.steps.length - 1) {
        tempStep.next = null;
      }

      if (index === 0) {
        tempStep.prev = null;
      }

      return tempStep;
    });

    injectDefaultStyles();
    this.placeWorker(this.steps[0]);

    window.addEventListener('resize', () => {
      this.placeWorker(this.steps[this.currentIndex]);
    });
  }

  createStep(target, callback) {
    const basicStep = {
      target,
      title: 'Click to change title 📌',
      content: 'Click for changing content...',
      isEditMode: true,
    };

    this.tooltip.onEditPositive = () => {
      const { TITLE, CONTENT, PREV_BUTTON, NEXT_BUTTON, FINISH_BUTTON } =
        this.tooltip.constant;

      const title = getInnerText(`.${TITLE.class}`);
      const content = getInnerText(`.${CONTENT.class}`);
      const prev = getInnerText(`.${PREV_BUTTON.class}`);
      const next = getInnerText(`.${NEXT_BUTTON.class}`);
      const finish = getInnerText(`.${FINISH_BUTTON.class}`);

      this.clearTourWorker();
      callback({
        positive: true,
        step: { target, title, content, prev, next, finish },
      });
    };

    this.tooltip.onEditNegative = () => {
      this.clearTourWorker();
      callback({ negative: true });
    };

    injectDefaultStyles();
    this.placeWorker(basicStep);

    window.addEventListener('resize', () => {
      this.placeWorker(basicStep);
    });
  }
}

export default Tour;
