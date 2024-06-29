import type { Meta, StoryObj } from '@storybook/react'
import { default as PBox } from '.'

const meta = {
  title: 'PBox',
  component: PBox,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PBox>

export default meta
type Story = StoryObj<typeof meta>

export const PBgGreenBox: Story = {
  args: {
    sx: { width: '192px', height: '128px', bgcolor: 'green' },
  },
}
