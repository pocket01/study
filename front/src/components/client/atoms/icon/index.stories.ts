import type { Meta, StoryObj } from "@storybook/react"
import PIcon from "."

const meta = {
  title: "PIcon",
  component: PIcon,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: { defaultValue: "" },
  },
} satisfies Meta<typeof PIcon>

export default meta
type Story = StoryObj<typeof meta>

export const ClickablePokeball: Story = {
  args: {
    icon: "pokeBall",
    sx: {
      fontSize: 40,
      color: "red",
      width: "40px",
      height: "40px",
    },
    onClick: (e) => alert("on Click Pokeball !"),
  },
}

export const UnClickablePokeball: Story = {
  args: {
    icon: "pokeBall",
    sx: {
      fontSize: 40,
      color: "red",
      width: "40px",
      height: "40px",
    },
  },
}
