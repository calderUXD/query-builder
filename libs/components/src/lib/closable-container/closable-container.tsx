import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ClosableContainerProps {}

const StyledClosableContainer = styled.div`
  color: pink;
`;

export function ClosableContainer(props: ClosableContainerProps) {
  return (
    <StyledClosableContainer>
      <h1>Welcome to ClosableContainer!</h1>
    </StyledClosableContainer>
  );
}

export default ClosableContainer;
