import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Container from '../container/container';
import Button from '../button/button';
import ButtonProps from '../button/button';
import { BsX } from "react-icons/bs";
;
/* eslint-disable-next-line */
export interface ClosableContainerProps {
  children: React.ReactNode,
  onClear: () => void
}

const IconButton = css`
  padding-left: .15rem;
  padding-right: .15rem;
`;


export function ClosableContainer({children, onClear}: ClosableContainerProps) {
  return (
    <Container bg="light" border="dark" padding="1.5rem .5rem">
      <Button btnTheme="none" onClick={onClear} css={IconButton}><BsX size="1.5rem" /></Button>
      <div>{children}</div>
    </Container>
  );
}

export default ClosableContainer;
