import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from '@query-builder/data';
import { darken } from 'polished';

/* eslint-disable-next-line */
export interface InputProps {
  type?: string,
  onChange: (e:any) => void,
  value: string | number
}

const dynamicStyles = () => css`
  &:focus{
    border-color: ${darken(0.2, `${theme.border.dark}`)};
  }
`;

const StyledInput = styled.input`
  border: 1px solid ${ theme.border.dark };
  border-radius: ${theme.radius};
  outline: none;
  padding: .25rem;
  ${dynamicStyles}
`;

export function Input({...props}: InputProps) {
  return (
    <StyledInput {...props} />
  );
}

Input.defaultProps = {
  onChange: (e:any) => null,
  value: ""
}

export default Input;
