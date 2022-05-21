// eslint-disable-next-line import/no-extraneous-dependencies
import smoothscroll from 'smoothscroll-polyfill';

import Tooltip from '../Tooltip';
import Highlighter from '../Highlighter';

import { getElementMeta } from '../../helpers';

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
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  }

  clearTourWorker() {
    this.tooltip.remove();
    this.highlighter.remove();
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

    smoothscroll.polyfill();

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

    this.placeWorker(this.steps[0]);

    window.addEventListener('resize', () => {
      this.placeWorker(this.steps[this.currentIndex]);
    });
  }
}

export default Tour;
