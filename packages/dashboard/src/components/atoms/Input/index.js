import * as S from "./style";

function Input({ wrapperProps, icon, ...props }) {
  return (
    <S.Input {...wrapperProps}>
      <input {...props} />
      {icon && icon}
    </S.Input>
  );
}

Input.S = S;
export default Input;
