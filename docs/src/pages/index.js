import { useEffect } from 'react';

import LandingContainer from '../containers/Landing';
import LandingLayout from '../layouts/Landing';

import Tour from 'tour.js/dist/index.js';

const tour = new Tour({
  steps: [
    {
      selector: 'h1',
      title: 'Heelo',
      content: 'asdsad',
    },
  ],
});

export default function Home() {
  useEffect(() => {
    // tour.start();
  }, []);

  return (
    <LandingLayout>
      <LandingContainer />
    </LandingLayout>
  );
}
