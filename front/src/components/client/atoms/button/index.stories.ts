import type { Meta, StoryObj } from '@storybook/react'
import PButton from '.'

const meta = {
  title: 'PButton',
  component: PButton,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    children: { defaultValue: 'ボタン' },
  },
} satisfies Meta<typeof PButton>

export default meta
type Story = StoryObj<typeof meta>

export const PMediumButton: Story = {
  args: {
    children: '通常サイズボタン',
  },
}

export const PSmallButton: Story = {
  args: {
    children: 'スモールサイズボタン',
    size: 's',
  },
}

export const PLargeButton: Story = {
  args: {
    children: 'ラージサイズボタン',
    size: 'l',
  },
}
