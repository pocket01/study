/**
 * 日時Utils
 */

import { StringConsts } from '@/consts/StringConsts'
import { DateFormatType, DateType } from '@/types/Types'
import dayjs from 'dayjs'

/**
 * 日時バリデーションチェック
 * @param date チェック対象
 * @param format フォーマット
 * @returns チェック結果
 */
const valid = (date: DateType, format: DateFormatType = 'YYYY/MM/DD') => {
  switch (format) {
    case 'YYYY/MM/DD':
      // 有効チェック
      if (!dayjs(date, format).isValid()) return false

      if (typeof date === 'string') {
        // 桁数チェック
        if (date.length !== 8) return false

        // 存在チェック
        const y = date.slice(0, 4)
        const m = date.slice(4, 6)
        const d = date.slice(6, 8)
        if (`${y}/${m}/${d}` !== dayjs(date, format).format(format))
          return false
      }

      return true
    default:
      // 想定外フォーマット
      return false
  }
}

/**
 * 現在日時を取得する
 * @param format フォーマット
 * @returns 現在日時
 */
const now = (format: DateFormatType = 'YYYY/MM/DD') => {
  return dayjs(new Date(), format).format(format)
}

const DateUtils = {
  valid,
  now,
}

export default DateUtils
