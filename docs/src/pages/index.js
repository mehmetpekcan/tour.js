import { useEffect } from 'react';

import LandingContainer from '../containers/Landing';
import LandingLayout from '../layouts/Landing';

export default function Home() {
  return (
    <LandingLayout>
      <LandingContainer />
    </LandingLayout>
  );
}
