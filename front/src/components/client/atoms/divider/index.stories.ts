import type { Meta, StoryObj } from '@storybook/react'
import PDivider from '.'

const meta = {
  title: 'PDivider',
  component: PDivider,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: { defaultValue: 'fullWidth' },
  },
} satisfies Meta<typeof PDivider>

export default meta
type Story = StoryObj<typeof meta>

export const PDefaultDivider: Story = {
  args: {
    variant: 'fullWidth',
  },
}

export const PInsetDivider: Story = {
  args: {
    variant: 'inset',
  },
}

export const PMiddleDivider: Story = {
  args: {
    variant: 'middle',
  },
}
