import type { Meta, StoryObj } from '@storybook/react'
import PText from '.'

const meta = {
  title: 'PText',
  component: PText,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { defaultValue: '' },
  },
} satisfies Meta<typeof PText>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultText: Story = {
  args: {
    value: 'DefaultText',
  },
}
