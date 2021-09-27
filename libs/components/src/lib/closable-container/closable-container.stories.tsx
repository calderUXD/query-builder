import { Story, Meta } from '@storybook/react';
import {
  ClosableContainer,
  ClosableContainerProps,
} from './closable-container';

export default {
  component: ClosableContainer,
  title: 'ClosableContainer',
} as Meta;

const Template: Story<ClosableContainerProps> = (args) => (
  <ClosableContainer {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
