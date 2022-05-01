import * as S from "./style";

const Header = ({ children }) => {
  return <S.Header>{children} </S.Header>;
};

const Body = ({ children }) => {
  return <S.Body>{children}</S.Body>;
};

const Footer = ({ children }) => {
  return <S.Footer>{children}</S.Footer>;
};

function Card({ children, ...props }) {
  return <S.Card {...props}>{children && children}</S.Card>;
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
