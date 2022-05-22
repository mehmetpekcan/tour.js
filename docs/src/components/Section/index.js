import * as S from './style';

function Section({ prefix, title, subtitle, color, children, ...props }) {
  return (
    <S.Section {...props}>
      <S.SubTitle color={color}>
        <S.Prefix color={color}>{prefix}</S.Prefix>
        {subtitle}
      </S.SubTitle>
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
    </S.Section>
  );
}

export default Section;
