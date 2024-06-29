import type { Meta, StoryObj } from '@storybook/react'
import PListItem from '.'

const meta = {
  title: 'PListItem',
  component: PListItem,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PListItem>

export default meta
type Story = StoryObj<typeof meta>

export const PYtListItem: Story = {
  args: {
    text: 'youTube',
    icon: 'youTube',
    link: '/api/youtube/oauth',
  },
}
