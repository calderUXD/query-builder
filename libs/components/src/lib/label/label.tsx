import styled from '@emotion/styled';
import Container from '../container/container';

/* eslint-disable-next-line */
export interface LabelProps {
  text: string
}

const StyledContainer = styled(Container)`
  display: inline-flex;
  margin-right: 1rem;
  padding: 0 .5rem;
`;

export function Label({text, ...props}: LabelProps) {
  return (
    <StyledContainer bg="dark" border="dark" {...props}>{text}</StyledContainer>
  );
}

export default Label;
