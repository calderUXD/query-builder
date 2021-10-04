import React from 'react';
import styled from '@emotion/styled';
import { theme } from "@query-builder/data";

/* eslint-disable-next-line */
export interface ContainerProps {
  border: "dark" | "light",
  bg: "dark" | "light",
  bm?: string,
  padding?: string,
  children: React.ReactNode,
  justifyContent?: string
}

const StyledContainer = styled.div<ContainerProps>`
  background: ${({bg}) => theme.bg[bg] };
  border: 1px solid ${({border}) => theme.border[border] };
  margin: 0px 0px ${({bm}) => bm ? bm : '0px'} 0px;
  padding: ${({padding}) => padding ? padding : ".25rem"};
  border-radius: ${theme.radius};
  display: flex;
  align-items: center;
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : "left"};;
`;

export function Container({bm, bg, border, padding, children, justifyContent, ...props}: ContainerProps) {
  return (
    <StyledContainer 
      bm={bm} 
      bg={bg} 
      border={border} 
      padding={padding} 
      justifyContent={justifyContent} 
      {...props}>
        {children}
      </StyledContainer>
  );
}

export default Container;
