import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@query-builder/data';
import { darken } from 'polished';

/* eslint-disable-next-line */
export interface ButtonProps {
  btnTheme: "primary" | "secondary" | "none",
  children: React.ReactNode,
  icon?: React.ReactNode,
  onClick: () => void,
  disabled: boolean,
  css?: any
}

const dynamicStyle = ({btnTheme}:ButtonProps) => css`
  background-color: ${theme.buttons[btnTheme]};
  color: ${btnTheme === "none" ? theme.buttons.secondary : "#fff"};
`;

const bgHover = ({btnTheme}:ButtonProps) => css`
  background-color: ${darken(0.08, `${theme.buttons[btnTheme]}`)};
  color: ${btnTheme === "none" ? darken(0.1, `${theme.buttons.secondary}`) : "#fff"};
`;

const disabledBtn = ({disabled}:ButtonProps) => css`
  cursor: ${disabled && "not-allowed"};
`;

const StyledButton = styled.div<ButtonProps>`
  ${dynamicStyle};
  display: inline-flex;
  padding: .5rem 1rem;
  border-radius: ${theme.radius};
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    ${bgHover};
  }
  ${disabledBtn}
`;

const IconWrap = styled.div`
  padding-right: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Button({children, btnTheme, icon, css, onClick, disabled, ...props}: ButtonProps) {
  return (
    <StyledButton btnTheme={btnTheme} onClick={onClick} disabled={disabled} {...props}>
      {icon && <IconWrap>{icon}</IconWrap>}
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  btnTheme: "primary",
  disabled: false
}

export default Button;
