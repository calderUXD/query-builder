import { Meta } from '@storybook/react';
import { Container } from './container';

export default {
  component: Container,
  title: 'Building Blocks / Containers',
} as Meta;

export const Primary = () => {
  return(<Container bg="light" border="dark" padding="1rem">Primary Container</Container>)
}

export const ResultsContainer = () => {
  return(<Container bg="light" border="light" padding="3rem" justifyContent="center"><code>Results Container</code></Container>)
}
