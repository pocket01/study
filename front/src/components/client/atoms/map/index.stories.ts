import type { Meta, StoryObj } from '@storybook/react'
import PMap from '.'

const meta = {
  title: 'PMap',
  component: PMap,
  parameters: {
    layout: 'center',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PMap>

export default meta
type Story = StoryObj<typeof meta>

export const PSmallMap: Story = {
  args: {
    width: 200,
    height: 200,
  },
}

export const PMiddleMap: Story = {
  args: {
    width: 400,
    height: 400,
  },
}

export const PLargeMap: Story = {
  args: {
    width: 800,
    height: 800,
  },
}
