import { useRouter } from 'next/router';
import React from 'react';
import Link from 'next/link';

import * as S from './style';

const navigationLinks = [
  {
    id: 1,
    title: 'Introduction',
    href: '/docs/introduction',
  },
  {
    id: 2,
    title: 'Getting Started',
    href: '/docs/getting-started',
  },
  {
    id: 3,
    title: 'Usage',
    href: '/docs/usage',
  },
  {
    id: 4,
    title: 'Step Api',
    href: '/docs/step',
  },
  {
    id: 5,
    title: 'Theme & Styling',
    href: '/docs/theme-and-styling',
  },
];

function DocumentationLayout({ children }) {
  const router = useRouter();

  return (
    <S.DocumentationLayout>
      <S.Navigation>
        {navigationLinks.map((link) => (
          <Link key={link.title} href={link.href} passHref>
            <S.Link active={link.href === router.pathname}>{link.title}</S.Link>
          </Link>
        ))}
      </S.Navigation>
      {children}
    </S.DocumentationLayout>
  );
}

export default DocumentationLayout;
