import React from "react";
import { Meta, Story } from "@storybook/react";
import Dropdown, { DropdownProps } from "./Dropdown";

const meta: Meta = {
  title: "design tokens/Dropdown",
  component: Dropdown,
  argTypes: {
    onClick: { action: "clicked" },
    onSelect: { action: "clicked" },
    className: {
      defaultValue: "px-4 py-2 rounded-lg",
    },
    items: {
      defaultValue: [
        { id: 1, name: "item 001" },
        { id: 2, name: "item 002" },
      ],
    },
    itemClassName: {
      defaultValue: "rounded-sm",
    },
  },
};

export default meta;

const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const Filled = Template.bind({});

Filled.args = {
  variant: "filled",
  children: "Dropdown",
};
