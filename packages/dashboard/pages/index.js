import { useEffect } from "react";

import Tour from "@tour.js/core";

const tour = new Tour({
  steps: [
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
  ],
});

const Home = () => {
  useEffect(() => {}, []);

  return (
    <>
      <h1>Tour.js Demo</h1>
      <div className="grid">
        <div className="box box-1">First Box</div>
        <div className="box box-2">Second Box</div>
        <div className="box box-3">Third Box</div>
        <button onClick={tour.start}>Start Tour</button>
        <button
          id="emptyTestButton"
          onClick={() => tour.createStep("#emptyTestButton")}
        >
          Create empty step
        </button>
      </div>
    </>
  );
};

export default Home;
