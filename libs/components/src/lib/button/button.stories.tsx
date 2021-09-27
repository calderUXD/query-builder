import { Meta } from '@storybook/react';
import { Button } from './button';
import { BsX, BsSearch } from "react-icons/bs";

export default {
  component: Button,
  title: 'Button',
} as Meta;

export const Primary = () => {
  return(<Button btnTheme="primary" icon={<BsSearch />} onClick={() => alert("clicked")}>Primary Button</Button>)
}

export const Secondary = () => {
  return(<Button btnTheme="secondary" onClick={() => alert("clicked")}>Secondary Button</Button>)
}

export const NoStyle = () => {
  return(<Button btnTheme="none" onClick={() => alert("clicked")}><BsX size="1.5rem" /> No Style</Button>)
}
//export const Secondary = Template.bind({});


