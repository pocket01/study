import type { Meta, StoryObj } from '@storybook/react'
import PLiffSample from '.'

const meta = {
  title: 'PLiffSample',
  component: PLiffSample,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
  argTypes: {
    profile: { userId: 'test' },
  },
} satisfies Meta<typeof PLiffSample>

export default meta
type Story = StoryObj<typeof meta>

export const PLiffSampleDefault = (): Story => {
  return {
    args: {
      profile: {
        userId: 'test',
        displayName: 'test',
      },
    },
  }
}
