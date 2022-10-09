import React from "react";
import { Meta, Story } from "@storybook/react";
import Button, { Props } from "./Button";

const meta: Meta = {
  title: "design tokens/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    // test comment
    opticalTestMultiplier: {
      defaultValue: 0,
    },
    className: {
      defaultValue: "px-8 py-[10px] rounded-full",
    },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Filled = Template.bind({});
export const Outline = Template.bind({});

Filled.args = {
  variant: "filled",
  children: "BUTTON",
};

Outline.args = {
  variant: "outline",
  children: "BUTTON",
};
