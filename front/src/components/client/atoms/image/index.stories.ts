import type { Meta, StoryObj } from "@storybook/react";
import PImage from ".";

const meta = {
  title: "PImage",
  component: PImage,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  argTypes: {
    src: { defaultValue: "/test.png" },
  },
} satisfies Meta<typeof PImage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "/Primary.png",
    sx: { width: "200px", height: "200px", backgroundColor: "lightgreen" },
  },
};

export const Secondary: Story = {
  args: {
    src: "/Secondary.png",
    sx: { width: "100px", height: "100px", backgroundColor: "lightblue" },
  },
};

export const Large: Story = {
  args: {
    src: "Large.png",
  },
};

export const Small: Story = {
  args: {
    src: "Small.png",
  },
};
