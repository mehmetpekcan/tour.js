import { Link as ReactLink } from "react-router-dom";

import * as S from "./style";

function Button({
  href,
  icon,
  children,
  disabled,
  type = "default",
  onClick,
  ...props
}) {
  return (
    <S.Button type={type} {...props}>
      {href ? (
        <ReactLink to={href}>
          {icon && <S.Icon>{icon}</S.Icon>}
          {children}
        </ReactLink>
      ) : (
        <button onClick={onClick} disabled={disabled}>
          {icon && <S.Icon>{icon}</S.Icon>}
          {children}
        </button>
      )}
    </S.Button>
  );
}

Button.S = S;
export default Button;
