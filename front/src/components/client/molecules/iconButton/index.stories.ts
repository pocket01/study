import type { Meta, StoryObj } from '@storybook/react'
import PIconButton from '.'

const meta = {
  title: 'PIconButton',
  component: PIconButton,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Pokeball: Story = {
  args: {
    icon: 'playCircle',
    onClick: (e) => alert('on Click playCircle !'),
    tooltip: {
      title: 'play',
    },
  },
}
