import React from 'react';
import styled from '@emotion/styled';
import { theme } from "@query-builder/data";

/* eslint-disable-next-line */
export interface ButtonProps {
  btnTheme: string,
  children: React.ReactNode,
  icon?: React.ReactNode,
  onClick: () => void
}

const StyledButton = styled.div<ButtonProps>`
  ${({btnTheme}) => btnTheme === "primary" && `background: ${theme.buttons.primary};`}
  ${({btnTheme}) => btnTheme === "secondary" && `background: ${theme.buttons.secondary};`}
  ${({btnTheme}) => btnTheme === "none" && `background: ${theme.buttons.none};`}
  color: ${({btnTheme})=> btnTheme === "none" ? theme.buttons.secondary : "#fff"};
  display: inline-flex;
  padding: .5rem 1rem;
  border-radius: ${theme.radius};
  align-items: center;
  justify-content: center;
`;

const IconWrap = styled.div`
  padding-right: .5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export function Button({children, btnTheme, icon, onClick}: ButtonProps) {
  return (
    <StyledButton btnTheme={btnTheme} onClick={onClick}>
      {icon && <IconWrap>{icon}</IconWrap>}
      {children}
    </StyledButton>
  );
}

Button.defaultProps = {
  btnTheme: "primary",
}

export default Button;
