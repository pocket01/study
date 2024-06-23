import type { Meta, StoryObj } from "@storybook/react"
import { default as PIconButton, default as PYtSearchResult } from "."

const meta = {
  title: "PYtSearchResult",
  component: PYtSearchResult,
  parameters: {
    layout: "center",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultQuery: { defaultValue: "" },
    videos: { defaultValue: [] },
  },
} satisfies Meta<typeof PIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const PYtDefaultSearchResult = (): Story => {
  return {
    args: {
      defaultQuery: "test",
      videos: undefined,
    },
  }
}
