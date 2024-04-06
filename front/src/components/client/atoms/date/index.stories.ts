import type { Meta, StoryObj } from "@storybook/react"
import PDate from "."

const meta = {
  title: "PDate",
  component: PDate,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  argTypes: {
    value: { defaultValue: new Date() },
  },
} satisfies Meta<typeof PDate>

export default meta
type Story = StoryObj<typeof meta>

export const PDateContents: Story = {
  args: {
    value: new Date(),
  },
}

export const PShortDateContents: Story = {
  args: {
    value: new Date(),
    format: "shortDate",
  },
}

export const PTimeContents: Story = {
  args: {
    value: new Date(),
    format: "time",
  },
}
