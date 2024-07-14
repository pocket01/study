/**
 * DateUtils Test
 */
import DateUtils from '@/util/DateUtils'
import StringUtils from '@/util/StringUtils'
import { expect, test } from 'vitest'

const { valid, now } = DateUtils

test('valid', () => {
  const now = new Date()
  expect(valid('abc')).toBe(false)
  expect(valid('2023/02/28')).toBe(false)
  expect(valid('20230229')).toBe(false)
  expect(valid('20240228')).toBe(true)
  expect(valid('20240229')).toBe(true)
  expect(valid(now)).toBe(true)
})

test('now', () => {
  const { padZero } = StringUtils
  const nowDate = new Date()
  const y = padZero(nowDate.getFullYear(), 4)
  const m = padZero(nowDate.getMonth() + 1, 2)
  const d = padZero(nowDate.getDate(), 2)
  expect(now()).toBe(`${y}/${m}/${d}`)
})
