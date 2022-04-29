import { Typography, Button, Empty, Drawer as AntdDrawer } from "antd";
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

const { Title, Paragraph } = Typography;

const getElementMeta = (element) => element.getBoundingClientRect();

const demoSteps = [
  {
    selector: ".box-1",
    title: "First Title 🚀",
    content:
      "Lorem Ipsum is simply dummy Paragraph of the printing and typesetting industry.",
    next: "Custom next ",
  },
  {
    selector: ".box-2",
    title: "Second Title 🔥",
    content:
      "Lorem Ipsum has been the industry's standard dummy Paragraph ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy Paragraph of the printing and typesetting industry. Lorem Ipsum is simply dummy Paragraph of the printing and typesetting industry.",
    next: "Custom next ",
    prev: "Custom prev",
  },
  {
    selector: "h1",
    title: "H1 Title 🔥",
    content:
      "Lorem Ipsum has been the industry's standard dummy Paragraph ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy Paragraph of the printing and typesetting industry. Lorem Ipsum is simply dummy Paragraph of the printing and typesetting industry.",
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

let tour = new Tour();

function Drawer() {
  const [steps, setSteps] = useState([]);
  const [isVisible, setIsVisible] = useState(true); // should be false by default

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

    setIsVisible(true);
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
    setIsVisible(false);

    document.addEventListener("click", removeAllEvents, true);
    window.addEventListener("mouseover", listenWindowElements);
  };

  const startTour = () => {
    tour = new Tour({ steps });
    tour.start();
    setIsVisible(false);
  };

  return (
    <AntdDrawer
      visible={isVisible}
      title="Tour.JS Crafter"
      bodyStyle={{ padding: 0 }}
    >
      <Container>
        {steps.length > 0 ? (
          <>
            <Title level={3}>Tours</Title>
            <List steps={steps} />
            <Button type="primary" onClick={startTour}>
              Start Tour
            </Button>
          </>
        ) : (
          <Empty
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: 60,
              display: "flex",
              justifyContent: "center",
            }}
            description={
              <S.Introduction>
                <Title level={3}>How to use?</Title>
                <Paragraph>
                  Start creating new tours by clicking below button. After then,
                  hover the element and click!
                </Paragraph>
              </S.Introduction>
            }
          >
            <Button type="dashed" icon={<PlusOutlined />} onClick={addStep}>
              Add new tour
            </Button>
          </Empty>
        )}
      </Container>
      {isHighlighterVisible &&
        createPortal(<S.Highlighter ref={highlighterRef} />, document.body)}
    </AntdDrawer>
  );
}

export default Drawer;
