import type { Meta, StoryObj } from "@storybook/react"
import PText from "."

const meta = {
  title: "PText",
  component: PText,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { defaultValue: "" },
  },
} satisfies Meta<typeof PText>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultText: Story = {
  args: {
    value: "DefaultText",
  },
}

export const PrimaryText: Story = {
  args: {
    value: "PrimaryText",
    color: "green",
  },
}

export const InfoText: Story = {
  args: {
    value: "InfoText",
    color: "blue",
  },
}

export const WarningText: Story = {
  args: {
    value: "WarningText",
    color: "yellow",
  },
}

export const ErrorText: Story = {
  args: {
    value: "ErrorText",
    color: "red",
  },
}

export const SmallText: Story = {
  args: {
    value: "SmallText",
    fontSize: "s",
  },
}

export const LargeText: Story = {
  args: {
    value: "LargeText",
    fontSize: "l",
  },
}
