import { useEffect } from "react";

import Tour from "@tour.js/core";

const tour = Tour({
  steps: [
    {
      selector: ".box-1",
      title: "Box 1",
      content: "Here box 1 content",
      position: "center",
    },
    {
      selector: ".box-2",
      title: "Box 1",
      content: "Here box 1 content",
      position: "center",
    },
    {
      selector: ".box-3",
      title: "Box 1",
      content: "Here box 1 content",
      position: "center",
    },
  ],
});

const Home = () => {
  useEffect(() => {}, []);

  return (
    <div className="grid">
      <div className="box box-1">First Box</div>
      <div className="box box-2">Second Box</div>
      <div className="box box-3">Third Box</div>
      <button onClick={tour.start}>Start Tour</button>
    </div>
  );
};

export default Home;
