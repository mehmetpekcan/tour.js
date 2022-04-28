import Tour from "@tour.js/core";
import "antd/dist/antd.css";

import "./styles/reset.css";
import "./styles/global.css";

import Drawer from "./components/Drawer";

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

let tour = new Tour();

function App() {
  const startDemoTour = () => {
    tour.changeSteps(demoSteps).start();
  };

  return (
    <div>
      {/* <button>Open TourJS editor</button> */}
      <Drawer isVisible={true} />

      <button onClick={startDemoTour}>Start demo tour</button>
      <br />

      <div style={{ margin: 21 }}>
        <div className="grid">
          <div className="box box-1">First Box</div>
          <div className="box box-2">Second Box</div>
          <div className="box box-3">Third Box</div>
        </div>
        <div>Element 1</div>
        <h1>Here is an H1</h1>
        <br />
        <br />
        <br />
        <div>
          <h3>Title</h3>
          <p style={{ border: "1px solid red" }}>Here is a paragraph</p>
          <br />
          <p>Here is an another paragraph</p>
        </div>
        <br />
        <button
          onClick={() => {
            console.log("Button clicked");
          }}
        >
          Clickable Element
        </button>
      </div>
    </div>
  );
}

export default App;
