import type { Meta, StoryObj } from '@storybook/react'
import PDay from '.'
import DateUtils from '@/util/DateUtils'

const meta = {
  title: 'PDay',
  component: PDay,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof PDay>

export default meta
type Story = StoryObj<typeof meta>

export const PDayNow: Story = {
  args: {
    date: {
      value: DateUtils.now(),
    },
  },
}
