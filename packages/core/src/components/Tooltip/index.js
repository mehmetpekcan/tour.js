import { TOOLTIP } from './constants';
import { HIGHLIGHTER_BORDER } from '../Highlighter/constants';
import { createElementFromHTML } from '../../helpers';

const defaultTooltipContent = {
  next: 'Next',
  prev: 'Previous',
  header: 'Header',
  body: 'Hulog',
  finish: 'Finish',
};

function Tooltip({ onNext, onPrev, onFinish }) {
  let tooltipElement;

  const remove = () => {
    tooltipElement.outerHTML = null;
  };

  const render = (
    targetPosition = null,
    content = {},
    hasPrev = false,
    hasNext = 0
  ) => {
    tooltipElement = document.querySelector('.tour--tooltip-wrapper');
    const args = { ...defaultTooltipContent, ...content };

    if (!hasPrev) args.prev = null;
    if (!hasNext) args.next = null;
    else args.finish = null;

    if (!tooltipElement) {
      const tooltipHTML = TOOLTIP.element(args);

      tooltipElement = createElementFromHTML(tooltipHTML);
      document.body.append(tooltipElement);
    } else {
      tooltipElement.innerHTML = TOOLTIP.innerElement(args);
    }

    if (!args.isEditMode) {
      const nextButton = document.querySelector('.tour--tooltip-next');
      const prevButton = document.querySelector('.tour--tooltip-prev');
      const finishButton = document.querySelector('.tour--tooltip-finish');

      if (nextButton) {
        nextButton.addEventListener('click', onNext, { once: true });
      }

      if (prevButton) {
        prevButton.addEventListener('click', onPrev, { once: true });
      }

      if (finishButton) {
        finishButton.addEventListener('click', onFinish, { once: true });
      }
    }

    setTimeout(() => {
      const { height, top, left } = targetPosition;
      const leftValue = `${left - HIGHLIGHTER_BORDER}px`;
      const topValue = `${top + height + HIGHLIGHTER_BORDER + 16}px`;

      tooltipElement.classList.add('visible');
      tooltipElement.style.setProperty('top', topValue);
      tooltipElement.style.setProperty('left', leftValue);
    }, 0);
  };

  return { render, remove };
}

export default Tooltip;
