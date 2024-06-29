import type { Meta, StoryObj } from '@storybook/react'
import PDateTime from '.'

const meta = {
  title: 'PDate',
  component: PDateTime,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { defaultValue: new Date() },
  },
} satisfies Meta<typeof PDateTime>

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
    format: 'shortDate',
  },
}

export const PTimeContents: Story = {
  args: {
    value: new Date(),
    format: 'time',
  },
}
