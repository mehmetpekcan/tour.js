import { TOOLTIP } from './constants';
import { HIGHLIGHTER_BORDER } from '../Highlighter/constants';
import { createElementFromHTML, getElementMeta } from '../../helpers';

const defaultTooltipOptions = {
  next: 'Next',
  prev: 'Previous',
  header: 'Header',
  body: 'Hulog',
};

function Tooltip({ onNext, onPrev, onFinish }) {
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
      const tooltipHTML = TOOLTIP.element(args);

      tooltipElement = createElementFromHTML(tooltipHTML);
      document.body.append(tooltipElement);
    } else {
      tooltipElement.innerHTML = TOOLTIP.innerElement(args);
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

    const { height, top, left } = getElementMeta(targetElement);

    const leftValue = `${left - HIGHLIGHTER_BORDER}px`;
    const topValue = `${top + height + HIGHLIGHTER_BORDER + 16}px`;

    tooltipElement.classList.add('visible');
    tooltipElement.style.setProperty('top', topValue);
    tooltipElement.style.setProperty('left', leftValue);
  };

  return { render, remove };
}

export default Tooltip;
