import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface LabelProps {}

const StyledLabel = styled.div`
  color: pink;
`;

export function Label(props: LabelProps) {
  return (
    <StyledLabel>
      <h1>Welcome to Label!</h1>
    </StyledLabel>
  );
}

export default Label;
