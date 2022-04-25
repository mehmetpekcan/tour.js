import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import Tour from "@tour.js/core";

import style from "./style.module.css";

const captureOnce = { once: true };

const FRAMEWORK_ROOTS = ["root", "_next"];
const HTML_ROOTS = ["HTML", "BODY"];

const getElementMeta = (element) => element.getBoundingClientRect();

const demoSteps = [
  {
    selector: ".box-1",
    title: "First Title 🚀",
    content:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    next: "Custom next ",
  },
  {
    selector: ".box-2",
    title: "Second Title 🔥",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    next: "Custom next ",
    prev: "Custom prev",
  },
  {
    selector: "h1",
    title: "H1 Title 🔥",
    content:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    next: "Custom next ",
    prev: "Custom prev",
  },
  {
    selector: ".box-3",
    title: "Third Title ✨",
    content:
      "but also the leasp into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of",
    prev: "Custom prev",
    finish: "Custom Finish",
  },
];

let tour = Tour();

function Drawer({ isVisible }) {
  const [steps, setSteps] = useState([]);
  // TODO: should be false by default, `true` just for test purpose
  const [isHighlighterVisible, setHighlighterVisible] = useState(true);
  const highlighterRef = useRef();

  useEffect(() => {
    return () => {
      // TODO: clean the listeners if exist
    };
  }, []);

  // To prevent existing events of elements inside the webpage
  const removeAllEvents = (event) => {
    event.stopPropagation();
    event.preventDefault();
  };

  const callback = ({ positive, negative, step }) => {
    if (positive) {
      setSteps([...steps, step]);
    } else {
      // TODO: fill the negative case
    }
  };

  const openEditor = (event) => {
    tour.createStep(event.target, callback);
    setHighlighterVisible(false);
    window.removeEventListener("mouseover", listenWindowElements);
    document.removeEventListener("click", removeAllEvents, true);
  };

  const listenWindowElements = ({ target }) => {
    if (!target) {
      return;
    }

    // Prevent some root and incompatible elements
    if (
      FRAMEWORK_ROOTS.includes(target.id) ||
      HTML_ROOTS.includes(target.tagName)
    ) {
      return;
    }

    const { top, left, width, height } = getElementMeta(target);

    highlighterRef.current.style.width = `${width + 8}px`;
    highlighterRef.current.style.height = `${height + 8}px`;
    highlighterRef.current.style.top = `${top - 4}px`;
    highlighterRef.current.style.left = `${left - 4}px`;

    const onMouseDown = (event) => {
      event.preventDefault();
      openEditor(event);
    };

    const clearListeners = () => {
      target.removeEventListener("mousedown", onMouseDown);
      target.removeEventListener("mouseout", onMouseOut);
    };

    const onMouseOut = () => {
      clearListeners();
    };

    target.addEventListener("mousedown", onMouseDown, captureOnce);
    target.addEventListener("mouseout", onMouseOut, captureOnce);
  };

  const addStep = () => {
    setHighlighterVisible(true);
    document.addEventListener("click", removeAllEvents, true);
    window.addEventListener("mouseover", listenWindowElements);
  };

  const startTour = () => {
    tour = Tour({ steps });
    tour.start();
  };

  const startDemoTour = () => {
    tour = Tour({ steps: demoSteps });
    tour.start();
  };

  return (
    <div className={`${style.drawer} ${isVisible ? `visible` : "hidden"}`}>
      <p>Drawer</p>
      <button onClick={startDemoTour}>Start demo tour</button>
      <br />
      <p>Or create one starting with adding step</p>
      <button onClick={addStep}>Add Step</button>
      {steps.length > 0 && (
        <>
          <ul>
            {steps.map((step, index) => (
              <li key={index.toString()}>
                Order: {index + 1}
                <br />
                Title: {step.title}
                <br />
                Content: {step.content}
                <br />
                Next Button: {step.next}
                <br />
                Prev Button: {step.prev}
                <br />
                Finish Button: {step.finish}
              </li>
            ))}
          </ul>
          <button onClick={startTour}>Start Tour</button>
        </>
      )}
      {isHighlighterVisible &&
        createPortal(
          <span className={style.highlighter} ref={highlighterRef} />,
          document.body
        )}
    </div>
  );
}

export default Drawer;
