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
      title: "Box 1123",
      content: "Here box 112312313 content",
      position: "center",
      next: "AAA",
      prev: "UHUHU",
    },
    {
      selector: ".box-3",
      title: "Box 112312",
      content: "Here box 1123123123 content",
      position: "center",
      finish: "Done",
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
