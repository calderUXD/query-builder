import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@query-builder/data';
import { darken } from 'polished';

/* eslint-disable-next-line */
export interface InputProps {}

const dynamicStyles = () => css`
  &:focus{
    border-color: ${darken(0.2, `${theme.border.dark}`)};
  }
`;

const StyledInput = styled.input`
  border: 1px solid ${ theme.border.dark };
  border-radius: ${theme.radius};
  outline: none;
  ${dynamicStyles}
`;

export function Input({...props}: InputProps) {
  return (
    <StyledInput {...props} />
  );
}

export default Input;
