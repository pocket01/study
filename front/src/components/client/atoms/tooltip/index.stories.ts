import type { Meta, StoryObj } from '@storybook/react'
import PTooltip from '.'

const meta = {
  title: 'PTooltip',
  component: PTooltip,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { defaultValue: 'ツールチップ' },
  },
} satisfies Meta<typeof PTooltip>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultTooltip: Story = {
  args: {
    title: 'ツールチップ',
  },
}
