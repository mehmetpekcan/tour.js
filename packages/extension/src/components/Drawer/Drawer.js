import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import Tour from "@tour.js/core";

import style from "./style.module.css";

const captureOnce = { once: true };

const FRAMEWORK_ROOTS = ["root", "_next"];
const HTML_ROOTS = ["HTML", "BODY"];

const getElementMeta = (element) => element.getBoundingClientRect();

function Drawer({ isVisible }) {
  // TODO: should be false by default, `true` just for test purpose
  const [isHighlighterVisible, setHighlighterVisible] = useState(true);
  const highlighterRef = useRef();

  useEffect(() => {
    // TODO: shouldn't be called by default, called just for test purpose
    addStep();

    return () => {
      // TODO: clean the listeners if exist
    };
  }, []);

  const openEditor = (event) => {
    console.log(event);
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

    setHighlighterVisible(true);

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
    // To prevent existing events of elements inside the webpage
    const removeAllEvents = (event) => {
      event.stopPropagation();
      event.preventDefault();
    };

    document.addEventListener("click", removeAllEvents, true);
    window.addEventListener("mouseover", listenWindowElements);
  };

  return (
    <div className={`${style.drawer} ${isVisible ? `visible` : "hidden"}`}>
      <p>Drawer</p>
      <button onClick={addStep}>Add Step</button>
      {isHighlighterVisible &&
        createPortal(
          <span className={style.highlighter} ref={highlighterRef} />,
          document.body
        )}
    </div>
  );
}

export default Drawer;
