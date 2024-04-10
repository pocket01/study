import type { Meta, StoryObj } from "@storybook/react"
import PMovie from "."

const meta = {
  title: "PMovie",
  component: PMovie,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  argTypes: {
    time: { defaultValue: 1 },
    format: { defaultValue: "mp4" },
  },
} satisfies Meta<typeof PMovie>

export default meta
type Story = StoryObj<typeof meta>

export const PMP4Movie: Story = {
  args: {
    time: 60,
    format: "mp4",
    thumn: {
      src: "./escort.png",
    },
  },
}

export const PAviMovie: Story = {
  args: {
    time: 3,
    format: "avi",
  },
}
