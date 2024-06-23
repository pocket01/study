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
    color: "GREEN",
  },
}

export const InfoText: Story = {
  args: {
    value: "InfoText",
    color: "BLUE",
  },
}

export const WarningText: Story = {
  args: {
    value: "WarningText",
    color: "YELLOW",
  },
}

export const ErrorText: Story = {
  args: {
    value: "ErrorText",
    color: "RED",
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
