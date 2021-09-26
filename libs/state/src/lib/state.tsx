import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface StateProps {}

const StyledState = styled.div`
  color: pink;
`;

export function State(props: StateProps) {
  return (
    <StyledState>
      <h1>Welcome to State!</h1>
    </StyledState>
  );
}

export default State;
