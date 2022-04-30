import * as constant from './constants';
import { HIGHLIGHTER_BORDER } from '../Highlighter/constants';
import { createElementFromHTML } from '../../helpers';

const defaultTooltipContent = {
  header: 'Header',
  body: 'Hulog',
};

const noop = () => {};

class Tooltip {
  constructor({
    onNext,
    onPrev,
    onFinish,
    onEditNegative,
    onEditPositive,
  } = {}) {
    this.onNext = onNext || noop;
    this.onPrev = onPrev || noop;
    this.onFinish = onFinish || noop;
    this.onEditNegative = onEditNegative || noop;
    this.onEditPositive = onEditPositive || noop;
    this.constant = constant;
  }

  onEditNextButtonClick() {
    const footer = document.querySelector(`.${constant.FOOTER.class}`);
    footer.style.display = 'flex';
    const button = createElementFromHTML(
      constant.NEXT_BUTTON.element({ next: 'Next', isEditMode: true })
    );
    footer.appendChild(button);

    return this;
  }

  onEditPrevButtonClick() {
    const footer = document.querySelector(`.${constant.FOOTER.class}`);
    footer.style.display = 'flex';
    const button = createElementFromHTML(
      constant.PREV_BUTTON.element({ prev: 'Prev', isEditMode: true })
    );
    footer.appendChild(button);

    return this;
  }

  onEditFinishButtonClick() {
    const footer = document.querySelector(`.${constant.FOOTER.class}`);
    footer.style.display = 'flex';
    const button = createElementFromHTML(
      constant.FINISH_BUTTON.element({ finish: 'Finish', isEditMode: true })
    );

    footer.appendChild(button);

    return this;
  }

  bindEvents() {
    const prefix = '.tour--tooltip';
    const events = [
      { selector: `${prefix}-next`, handler: this.onNext },
      { selector: `${prefix}-prev`, handler: this.onPrev },
      { selector: `${prefix}-finish`, handler: this.onFinish },
      { selector: `${prefix}-edit-positive`, handler: this.onEditPositive },
      { selector: `${prefix}-edit-negative`, handler: this.onEditNegative },
      { selector: `${prefix}-edit-next`, handler: this.onEditNextButtonClick },
      { selector: `${prefix}-edit-prev`, handler: this.onEditPrevButtonClick },
      {
        selector: `${prefix}-edit-finish`,
        handler: this.onEditFinishButtonClick,
      },
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

export default Tooltip;
