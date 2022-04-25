import "./styles/reset.css";
import "./styles/global.css";

import Drawer from "./components/Drawer";

function App() {
  return (
    <div>
      {/* <button>Open TourJS editor</button> */}
      <Drawer isVisible={true} />

      <div style={{ margin: 20 }}>
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
