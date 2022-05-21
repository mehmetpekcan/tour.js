import * as constant from './constants';
import { HIGHLIGHTER_BORDER } from '../Highlighter/constants';
import { createElementFromHTML } from '../../helpers';

const defaultTooltipContent = {
  header: 'Header',
  body: 'Hulog',
};

const noop = () => {};

class Tooltip {
  constructor({ onNext, onPrev, onFinish } = {}) {
    this.onNext = onNext || noop;
    this.onPrev = onPrev || noop;
    this.onFinish = onFinish || noop;
    this.constant = constant;
  }

  bindEvents() {
    const prefix = '.tour--tooltip';
    const events = [
      { selector: `${prefix}-next`, handler: this.onNext },
      { selector: `${prefix}-prev`, handler: this.onPrev },
      { selector: `${prefix}-finish`, handler: this.onFinish },
    ];

    events.forEach(({ selector, handler }) => {
      const button = document.querySelector(selector);

      if (button) {
        button.addEventListener('click', handler, { once: true });
      }
    });
  }

  remove() {
    this.element.outerHTML = null;
  }

  render(content = {}) {
    this.element = document.querySelector('.tour--tooltip-wrapper');
    const args = { ...defaultTooltipContent, ...content };

    if (!this.element) {
      const tooltipHTML = constant.TOOLTIP.element(args);

      this.element = createElementFromHTML(tooltipHTML);
      document.body.append(this.element);
    } else {
      this.element.innerHTML = constant.TOOLTIP.innerElement(args);
    }

    this.bindEvents();
  }

  changePosition(targetPosition) {
    const { height, top, left } = targetPosition;
    const { scrollX, scrollY } = window;

    const leftValue = scrollX + left - HIGHLIGHTER_BORDER;
    let topValue = scrollY + top;

    if (top + this.element.clientHeight > window.innerHeight) {
      topValue -= this.element.clientHeight + HIGHLIGHTER_BORDER + 16;
    } else {
      topValue += height + HIGHLIGHTER_BORDER + 16;
    }

    this.element.classList.add('visible');
    this.element.style.setProperty('top', `${topValue}px`);
    this.element.style.setProperty('left', `${leftValue}px`);
  }
}

Tooltip.constant = constant;
export default Tooltip;
