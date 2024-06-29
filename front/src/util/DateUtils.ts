/**
 * 日時Utils
 */
import { NumberConsts } from '@/consts/NumberConsts'
import { StringConsts } from '@/consts/StringConsts'
import { DateTimeFormatType, SepalaterType } from '@/types/Types'
import StringUtils from './StringUtils'

const dgtOpt = '2-digit'
const TIME_LENGTH = 2

const getFormatOpt = (
  format: DateTimeFormatType,
): Intl.DateTimeFormatOptions => {
  const ymd: Intl.DateTimeFormatOptions = {
    year: format === ('shortDate' || 'shortDatetime') ? dgtOpt : 'numeric',
    month: dgtOpt,
    day: dgtOpt,
  }
  switch (format) {
    case 'date':
    case 'shortDate':
      return ymd
    default:
      return {
        ...ymd,
        hour: dgtOpt,
        minute: dgtOpt,
        second: dgtOpt,
      }
  }
}

/**
 * valueから時間を求める。
 * @param value 日時 または 秒数
 * @param sep 区切り文字
 * @returns 時間
 */
const getTime = (value: Date | number, sep: SepalaterType = ':') => {
  const { padZero } = StringUtils

  if (typeof value === 'number') {
    const { ErorMessages: ErorMessage } = StringConsts
    if (!Number.isInteger(value)) return ErorMessage

    const { MINUTES_SIZE, SECONDS_SIZE } = NumberConsts
    const s = padZero((value % SECONDS_SIZE).toString(), TIME_LENGTH)
    const m = padZero(
      (Math.floor(value / SECONDS_SIZE) % MINUTES_SIZE).toString(),
      TIME_LENGTH,
    )
    const h = padZero(
      Math.floor(Math.floor(value / SECONDS_SIZE) / MINUTES_SIZE).toString(),
      TIME_LENGTH,
    )
    return h + sep + m + sep + s
  }

  const s = padZero(value.getSeconds().toString(), TIME_LENGTH)
  const m = padZero(value.getMinutes().toString(), TIME_LENGTH)
  const h = padZero(value.getHours().toString(), TIME_LENGTH)
  return h + sep + m + sep + s
}

/**
 * dateを指定したformatでフォーマットする。
 * @param value 日付または秒数
 * @param format フォーマット
 * @returns フォーマット後の日付
 */
const formatDate = (
  value: Date | number,
  format: DateTimeFormatType = 'date',
) => {
  if (typeof value === 'number' || format === 'time') return getTime(value)
  return value.toLocaleDateString('ja-JP', getFormatOpt(format))
}

/**
 * 現在日時を指定したformatで取得する。
 * @param format フォーマット
 * @returns
 */
const now = (format?: DateTimeFormatType) => {
  return formatDate(new Date(), format)
}

const DateUtils = {
  formatDate: formatDate,
  now: now,
}

export default DateUtils
