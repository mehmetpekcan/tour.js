import * as S from "./style";

const Header = ({ children, ...props }) => {
  return <S.Header {...props}>{children} </S.Header>;
};

const Body = ({ children, ...props }) => {
  return <S.Body {...props}>{children}</S.Body>;
};

const Footer = ({ children }) => {
  return <S.Footer>{children}</S.Footer>;
};

function Card({ children, ...props }) {
  return <S.Card {...props}>{children && children}</S.Card>;
}

Card.S = S;
Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;
