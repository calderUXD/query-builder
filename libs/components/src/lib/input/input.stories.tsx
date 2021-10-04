import { Story, Meta } from '@storybook/react';
import { Input, InputProps } from './input';

export default {
  component: Input,
  title: 'Building Blocks / Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  placeholder: "Enter Text",
  type: "text"
};

export const Number = Template.bind({});
Number.args = {
  placeholder: "Enter Number",
  type: "number"
};
