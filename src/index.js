import { insertElement, createElementFromHTML } from "./helpers";

const walkthroughElementHTML = `
  <div tab-index='0'>
    Simple walkthrough
  </div>
`;

const getWalkthroughElementCSS = (target) => `
  position: absolute;
  top: ${target.offsetTop + target.clientHeight + 24}px;
  border: 1px solid #2c3e50;
  padding: 12px 24px;
  background-color: #fff;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, .1);
  transition: 300ms all ease;
`;

const createWalkthrough = (target) => {
  const walkthroughElement = createElementFromHTML(walkthroughElementHTML);
  insertElement(walkthroughElement, target);

  walkthroughElement.setAttribute("style", getWalkthroughElementCSS(target));
};

const documentListener = (e) => {
  e.preventDefault();
  e.stopPropagation();

  createWalkthrough(e.target);
};

const addWorker = () => {
  document.body.addEventListener("click", documentListener);
};

const removeWorker = () => {
  document.body.removeEventListener("click", documentListener);
};

const Tour = () => {
  return {
    addWorker,
    removeWorker,
  };
};

export default Tour();
