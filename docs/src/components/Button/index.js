import PropTypes from 'prop-types';

import * as S from './style';

function Button({ icon, kind, children, ...props }) {
  return (
    <S.Button kind={kind} {...props}>
      {icon && <S.IconWrapper>{icon}</S.IconWrapper>}
      {children}
    </S.Button>
  );
}

Button.propTypes = {
  kind: PropTypes.string,
  icon: PropTypes.node,
};

Button.defaultProps = {
  kind: 'default',
  icon: null,
};

export default Button;
