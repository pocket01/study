import type { Meta, StoryObj } from '@storybook/react'
import PIFrame from '.'

const meta = {
  title: 'PIFrame',
  component: PIFrame,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { defaultValue: 560 },
    height: { defaultValue: 315 },
    src: {
      defaultValue:
        'https://www.youtube.com/embed/0W7s1trfUio?si=jOwVoqtK3X2Xj-yA',
    },
  },
} satisfies Meta<typeof PIFrame>

export default meta
type Story = StoryObj<typeof meta>

export const YtEscort: Story = {
  args: {
    width: 560,
    height: 315,
    src: 'https://www.youtube.com/embed/0W7s1trfUio?si=jOwVoqtK3X2Xj-yA',
  },
}
