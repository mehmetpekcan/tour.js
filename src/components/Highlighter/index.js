import { HIGHLIGHTER_BORDER, HIGHLIGHTER } from './constants';
import { createElementFromHTML } from '../../helpers';

const defaultHighlighterContent = {};

function Highlighter() {
  let highlighterElement;

  const render = (targetPosition, content = {}) => {
    highlighterElement = document.querySelector('.tour--highlighter-wrapper');

    if (!highlighterElement) {
      const args = { ...defaultHighlighterContent, ...content };
      const highlighterHTML = HIGHLIGHTER.element(args);

      highlighterElement = createElementFromHTML(highlighterHTML);
      document.body.append(highlighterElement);
    }

    setTimeout(() => {
      const { width, height, top, left } = targetPosition;

      const widthValue = `${width}px`;
      const heightValue = `${height}px`;
      const topValue = `${top - HIGHLIGHTER_BORDER}px`;
      const leftValue = `${left - HIGHLIGHTER_BORDER}px`;

      highlighterElement.classList.add('visible');
      highlighterElement.style.setProperty('width', widthValue);
      highlighterElement.style.setProperty('height', heightValue);
      highlighterElement.style.setProperty('top', topValue);
      highlighterElement.style.setProperty('left', leftValue);
    }, 0);
  };

  const remove = () => {
    highlighterElement.outerHTML = null;
  };

  return { render, remove };
}

export default Highlighter;
