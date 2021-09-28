import { Story, Meta } from '@storybook/react';
import {
  ClosableContainer
} from './closable-container';

export default {
  component: ClosableContainer,
  title: 'Building Blocks / Closable Container',
} as Meta;

export const Primary = () => {
  return(<ClosableContainer onClear={() => alert("clearFired")}>form contents here</ClosableContainer>)
}
