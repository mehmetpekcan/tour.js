import { HIGHLIGHTER_BORDER, HIGHLIGHTER } from './constants';
import { createElementFromHTML, getElementMeta } from '../../helpers';

const defaultHighlighterOptions = {};

function Highlighter() {
  let highlighterElement;

  const render = (targetElement, options = {}) => {
    highlighterElement = document.querySelector('.tour--highlighter-wrapper');

    if (!highlighterElement) {
      const args = { ...defaultHighlighterOptions, ...options };
      const highlighterHTML = HIGHLIGHTER.element(args);

      highlighterElement = createElementFromHTML(highlighterHTML);
      document.body.append(highlighterElement);
    }

    const { width, height, top, left } = getElementMeta(targetElement);

    const widthValue = `${width}px`;
    const heightValue = `${height}px`;
    const topValue = `${top - HIGHLIGHTER_BORDER}px`;
    const leftValue = `${left - HIGHLIGHTER_BORDER}px`;

    highlighterElement.classList.add('visible');
    highlighterElement.style.setProperty('width', widthValue);
    highlighterElement.style.setProperty('height', heightValue);
    highlighterElement.style.setProperty('top', topValue);
    highlighterElement.style.setProperty('left', leftValue);
  };

  const remove = () => {
    highlighterElement.outerHTML = null;
  };

  return { render, remove };
}

export default Highlighter;
