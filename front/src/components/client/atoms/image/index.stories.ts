import type { Meta, StoryObj } from '@storybook/react'
import PImage from '.'

const meta = {
  title: 'PImage',
  component: PImage,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    src: { defaultValue: '/test.png' },
  },
} satisfies Meta<typeof PImage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: '/Primary.png',
  },
}
