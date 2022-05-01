import { Link as ReactLink } from "react-router-dom";

import * as S from "./style";

function Button({ href, children, type = "default" }) {
  return (
    <S.Button type={type}>
      <ReactLink to={href}>{children}</ReactLink>
    </S.Button>
  );
}

Button.S = S;
export default Button;
