/**
 * 日時Utils
 */

import { CalendarType, DateFormatType, DateType } from '@/types/Types'
import dayjs from 'dayjs'
import StringUtils from './StringUtils'
import 'dayjs/locale/ja'
dayjs.locale('ja')

/**
 * 日時バリデーションチェック
 * @param date チェック対象
 * @param format フォーマット
 * @returns チェック結果
 */
const valid = ({ value: date, format = 'YYYY/MM/DD' }: DateType) => {
  // 有効チェック
  if (!dayjs(date, format).isValid()) return false

  if (typeof date === 'string') {
    // 桁数チェック
    if (date.length < 8) return false

    // 日付存在チェック
    const dateFormat = 'YYYY/MM/DD'
    const replaceDate = date.replaceAll('/', '')
    const y = replaceDate.slice(0, 4)
    const m = replaceDate.slice(4, 6)
    const d = replaceDate.slice(6, 8)
    if (`${y}/${m}/${d}` !== dayjs(replaceDate, dateFormat).format(dateFormat))
      return false
  }

  return true
}

/**
 * 日時をフォーマットする（string型）
 * @param date 日時
 * @param format フォーマット
 * @returns フォーマット後の日時
 */
const formatString = ({ value: date, format = 'YYYY/MM/DD' }: DateType) => {
  if (!valid({ value: date, format })) return ''
  return dayjs(date, format).format(format)
}

/**
 * 現在日時を取得する
 * @param format フォーマット
 * @returns 現在日時
 */
const now = (format: DateFormatType = 'YYYY/MM/DD') => {
  return formatString({ value: new Date(), format })
}

/**
 * 基準日から月末を取得する
 * @param value 基準日
 * @param format フォーマット
 * @returns 月末
 */
const endOf = ({ value, format = 'YYYY/MM/DD' }: DateType) => {
  if (!valid({ value, format })) return ''

  const end = dayjs(value, format).endOf('month')
  switch (format) {
    case 'YYYY':
    case 'YYYY/MM':
    case 'YYYY/MM/DD':
    case 'MM':
    case 'M':
    case 'DD':
    case 'D':
      end.set('hours', 0)
      end.set('minutes', 0)
      end.set('seconds', 0)
      end.set('milliseconds', 0)
      break
    default:
      break
  }
  return formatString({ value: end.format(format), format })
}

/**
 * 基準日からカレンダーを生成する
 * @param value 基準日
 * @param format フォーマット
 * @returns 現在日時
 */
const createCalendar = (
  { value = new Date(), format = 'YYYY/MM/DD' }: DateType | undefined = {
    value: new Date(),
    format: 'YYYY/MM/DD',
  },
): CalendarType | undefined => {
  if (!valid({ value, format })) return undefined
  const { padZero } = StringUtils

  const end = endOf({ value, format }).replaceAll('/', '')
  const y = padZero(Number(end.slice(0, 4)), 4)
  const m = padZero(Number(end.slice(4, 6)), 2)
  const d = Number(end.slice(6, 8))

  const values = [...Array(d)].map((_, i) => {
    return {
      value: formatString({
        value: `${y}/${m}/${padZero(i + 1, 2)}`,
      }),
      format: format,
    }
  })

  return {
    values,
  }
}

const DateUtils = {
  valid,
  formatString,
  now,
  endOf,
  createCalendar,
}

export default DateUtils
