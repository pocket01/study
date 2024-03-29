import type { Meta, StoryObj } from "@storybook/react";
import PImage from ".";

const meta = {
  title: "PDevelop/PImage",
  component: PImage,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  argTypes: {
    url: { defaultValue: "Primary" },
    // sx: { defaultValue: { bgColor: "red" } },
  },
} satisfies Meta<typeof PImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    url: "Primary",
    sx: { bgcolor: "lightgreen" },
  },
};

export const Secondary: Story = {
  args: {
    url: "Secondary",
    sx: { bgcolor: "lightblue" },
  },
};

export const Large: Story = {
  args: {
    url: "Large",
  },
};

export const Small: Story = {
  args: {
    url: "Small",
  },
};
