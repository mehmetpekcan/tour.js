import { Typography, Button, Row, Col } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { createPortal } from "react-dom";
import { useState, useEffect, useRef } from "react";
import Tour from "@tour.js/core";

import * as S from "./style";
import List from "../List";
import Container from "../Container";
import Logo from "../Logo";

const captureOnce = { once: true };

const FRAMEWORK_ROOTS = ["root", "_next"];
const HTML_ROOTS = ["HTML", "BODY"];

const { Title } = Typography;

const getElementMeta = (element) => element.getBoundingClientRect();

let tour = new Tour();

function Drawer({ isVisible }) {
  const [steps, setSteps] = useState([]);
  // const [steps, setSteps] = useState([]);
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
    tour = new Tour({ steps });
    tour.start();
  };

  return (
    <S.Drawer isVisible={isVisible}>
      <Container>
        <Logo />
      </Container>
      <Container>
        {/* <S.Introduction>
        <S.Title>How to use?</S.Title>
        <S.Text>
          Start creating new onboarding by just one click. After clicking our
          wizard starts listen you. You just need to hover and click the element
          that you want to add as a walkthrough step.
        </S.Text>
      </S.Introduction> */}
        <S.NewElements>
          <Button type="dashed" icon={<PlusOutlined />} onClick={addStep}>
            Add new tour
          </Button>
        </S.NewElements>
      </Container>
      <Container>
        {steps.length > 0 && (
          <>
            <List steps={steps} />
            <button onClick={startTour}>Start Tour</button>
          </>
        )}
      </Container>
      {isHighlighterVisible &&
        createPortal(<S.Highlighter ref={highlighterRef} />, document.body)}
    </S.Drawer>
  );
}

export default Drawer;
