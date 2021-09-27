import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ContainerProps {}

const StyledContainer = styled.div`
  color: pink;
`;

export function Container(props: ContainerProps) {
  return (
    <StyledContainer>
      <h1>Welcome to Container!</h1>
    </StyledContainer>
  );
}

export default Container;
