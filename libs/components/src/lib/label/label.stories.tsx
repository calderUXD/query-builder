import { Story, Meta } from '@storybook/react';
import { Label, LabelProps } from './label';

export default {
  component: Label,
  title: 'Building Blocks / Label',
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: "is"
};
