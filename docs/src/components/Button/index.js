import Link from 'next/link';
import PropTypes from 'prop-types';

import * as S from './style';

function Button({ icon, kind, target, rel, children, ...props }) {
  if (kind.startsWith('link')) {
    return (
      <Link passHref {...props}>
        <S.Link
          target={target}
          rel={rel}
          kind={kind === 'link' ? 'link' : kind.replace('link-', '')}
        >
          {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
          {children}
        </S.Link>
      </Link>
    );
  }

  return (
    <S.Button kind={kind} {...props}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  target: PropTypes.string,
  rel: PropTypes.string,
  kind: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  kind: 'default',
  icon: null,
  target: null,
  rel: null,
};

export default Button;
