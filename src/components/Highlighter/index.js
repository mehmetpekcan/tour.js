import { HIGHLIGHTER_BORDER, HIGHLIGHTER } from './constants';
import { createElementFromHTML } from '../../helpers';

const defaultHighlighterContent = {};

class Highlighter {
  remove() {
    this.element.outerHTML = null;
  }

  render(content = {}) {
    this.element = document.querySelector('.tour--highlighter-wrapper');

    if (!this.element) {
      const args = { ...defaultHighlighterContent, ...content };
      const highlighterHTML = HIGHLIGHTER.element(args);

      this.element = createElementFromHTML(highlighterHTML);
      document.body.append(this.element);
    }
  }

  changePosition(targetPosition) {
    const { width, height, top, left } = targetPosition;
    const { scrollX, scrollY } = window;

    const widthValue = width;
    const heightValue = height;
    const topValue = scrollY + top - HIGHLIGHTER_BORDER - 16;
    const leftValue = scrollX + left - HIGHLIGHTER_BORDER - 16;

    this.element.classList.add('visible');
    this.element.style.setProperty('width', `${widthValue}px`);
    this.element.style.setProperty('height', `${heightValue}px`);
    this.element.style.setProperty('top', `${topValue}px`);
    this.element.style.setProperty('left', `${leftValue}px`);
  }
}

export default Highlighter;
