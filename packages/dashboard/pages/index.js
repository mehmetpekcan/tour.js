import { useEffect } from "react";

import Tour from "@tour.js/core";

const Home = () => {
  useEffect(() => {
    console.log(Tour);
  }, []);

  return <div>Hello</div>;
};

export default Home;
