import type { Meta, StoryObj } from '@storybook/react'
import { default as PIconButton, default as PCalendar } from '.'
import DateUtils from '@/util/DateUtils'

const meta = {
  title: 'PCalendar',
  component: PCalendar,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    calendar: { defaultValue: undefined },
  },
} satisfies Meta<typeof PIconButton>

export default meta
type Story = StoryObj<typeof meta>

export const PCurrentCalendar = (): Story => {
  return {
    args: {
      calendar: DateUtils.createCalendar(),
    },
  }
}
