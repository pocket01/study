/**
 * StringUtils Test
 */
import StringUtils from '@/util/StringUtils'
import { expect, test } from 'vitest'

const { padStr, padZero } = StringUtils

test('padStr', () => {
  expect(padStr('123', 4, 'start', '0')).toBe('0123')
  expect(padStr(123, 4, 'start', '0')).toBe('0123')
})

test('padZero', () => {
  expect(padZero('123', 4)).toBe('0123')
  expect(padZero(123, 4)).toBe('0123')
})
