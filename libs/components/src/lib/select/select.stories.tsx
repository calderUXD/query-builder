import { Story, Meta } from '@storybook/react';
import { Select, SelectProps } from './select';

export default {
  component: Select,
  title: 'Building Blocks / Base Select',
} as Meta;

const Template: Story<SelectProps> = (args) => <div style={{width:"220px"}}><Select {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {};
