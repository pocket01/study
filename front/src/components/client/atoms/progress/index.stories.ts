import type { Meta, StoryObj } from "@storybook/react"
import { default as PButton, default as PProgress } from "."

const meta = {
  title: "PProgress",
  component: PProgress,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  argTypes: {
    mode: { defaultValue: "circle" },
  },
} satisfies Meta<typeof PButton>

export default meta
type Story = StoryObj<typeof meta>

export const PCircularProgress: Story = {
  args: {
    mode: "circle",
  },
}

export const PLinearProgress: Story = {
  args: {
    mode: "linear",
  },
}
