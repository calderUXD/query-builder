import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { theme } from "@query-builder/data";
import { darken } from 'polished';
import { BiChevronDown } from "react-icons/bi";

/* eslint-disable-next-line */
export interface InputProps {
  value: null | string,
  placeholder: string,
  onClick: () => void
};

const dynamicStyles = () => css`
  &:hover{
    border-color: ${darken(0.2, `${theme.border.dark}`)};
  }
`;

const StyledInput = styled.div`
  ${dynamicStyles}
  display: flex;
  border: 1px solid ${ theme.border.dark };
  border-radius: ${theme.radius};
  padding: .25rem;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
`;

const Placeholder = styled.span`
  color: ${theme.border.dark};
`;

export function Input({value, onClick, placeholder}: InputProps) {
  return (
    <StyledInput onClick={onClick}>
      <div>
        {value ? value : <Placeholder>{placeholder}</Placeholder>}
      </div>
      <BiChevronDown color={theme.border.dark} size="1.25rem" />
    </StyledInput>
  );
}

export default Input;
