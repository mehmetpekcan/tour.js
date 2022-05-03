import { Link as ReactLink } from "react-router-dom";

import * as S from "./style";

function Button({ href, icon, children, type = "default", onClick }) {
  return (
    <S.Button type={type}>
      {href ? (
        <ReactLink to={href}>
          {icon && <S.Icon>{icon}</S.Icon>}
          {children}
        </ReactLink>
      ) : (
        <button onClick={onClick}>
          {icon && <S.Icon>{icon}</S.Icon>}
          {children}
        </button>
      )}
    </S.Button>
  );
}

Button.S = S;
export default Button;
