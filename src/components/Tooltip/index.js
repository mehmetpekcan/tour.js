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
    this.tooltipElement.outerHTML = null;
  }

  render(targetPosition = null, content = {}) {
    this.tooltipElement = document.querySelector('.tour--tooltip-wrapper');
    const args = { ...defaultTooltipContent, ...content };

    if (!this.tooltipElement) {
      const tooltipHTML = constant.TOOLTIP.element(args);

      this.tooltipElement = createElementFromHTML(tooltipHTML);
      document.body.append(this.tooltipElement);
    } else {
      this.tooltipElement.innerHTML = constant.TOOLTIP.innerElement(args);
    }

    this.bindEvents();

    setTimeout(() => {
      const { height, top, left } = targetPosition;
      const leftValue = `${left - HIGHLIGHTER_BORDER}px`;
      const topValue = `${top + height + HIGHLIGHTER_BORDER + 16}px`;

      this.tooltipElement.classList.add('visible');
      this.tooltipElement.style.setProperty('top', topValue);
      this.tooltipElement.style.setProperty('left', leftValue);
    }, 0);
  }
}

Tooltip.constant = constant;
export default Tooltip;
