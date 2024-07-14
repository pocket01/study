/**
 * DateUtils Test
 */
import { CalendarType } from '@/types/Types'
import DateUtils from '@/util/DateUtils'
import StringUtils from '@/util/StringUtils'
import { expect, test } from 'vitest'

const { valid, formatString, now, endOf, createCalendar } = DateUtils

test('valid', () => {
  const now = new Date()
  expect(valid({ value: 'abc' })).toBe(false)
  expect(valid({ value: '2024-02-29' })).toBe(false)
  expect(valid({ value: '2024229' })).toBe(false)
  expect(valid({ value: '20230229' })).toBe(false)
  expect(valid({ value: '20240229' })).toBe(true)
  expect(valid({ value: '2024/02/29' })).toBe(true)
  expect(valid({ value: now })).toBe(true)
})

test('formatString', () => {
  expect(formatString({ value: '20230229' })).toBe('')
  expect(formatString({ value: '20240229' })).toBe('2024/02/29')

  const { padZero } = StringUtils
  const nowDate = new Date()
  const y = padZero(nowDate.getFullYear(), 4)
  const m = padZero(nowDate.getMonth() + 1, 2)
  const d = padZero(nowDate.getDate(), 2)
  expect(formatString({ value: `${y}${m}${d}` })).toBe(`${y}/${m}/${d}`)
})

test('now', () => {
  const { padZero } = StringUtils
  const nowDate = new Date()
  const y = padZero(nowDate.getFullYear(), 4)
  const m = padZero(nowDate.getMonth() + 1, 2)
  const d = padZero(nowDate.getDate(), 2)
  expect(now()).toBe(`${y}/${m}/${d}`)
})

test('endOf', () => {
  expect(endOf({ value: '20230229' })).toBe('')
  expect(endOf({ value: '20230201' })).toBe('2023/02/28')
  expect(endOf({ value: '20240201' })).toBe('2024/02/29')
  expect(
    endOf({ value: '2024/02/01 23:59:59', format: 'YYYY/MM/DD HH:mm:ss' }),
  ).toBe('2024/02/29 23:59:59')
})

test('createCalendar', () => {
  expect(createCalendar({ value: '20230229' })).toBe(undefined)

  const calendar: CalendarType = {
    values: [],
  }
  for (let i = 1; i < 30; i++) {
    calendar.values.push({
      value: `2024/02/${StringUtils.padZero(i, 2)}`,
      format: 'YYYY/MM/DD',
    })
  }
  expect(createCalendar({ value: '20240229' })).toStrictEqual(calendar)
})
