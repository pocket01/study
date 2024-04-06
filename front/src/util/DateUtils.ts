/**
 * 日時Utils
 */
import { NumberConsts } from "@/consts/NumberConsts"
import { StrConsts } from "@/consts/StrConsts"
import { DateFormatType } from "@/types/Types"
import StringUtils from "./StringUtils"

const dgtOpt = "2-digit"
const TIME_LENGTH = 2

const getFormatOpt = (format: DateFormatType): Intl.DateTimeFormatOptions => {
  const ymd: Intl.DateTimeFormatOptions = {
    year: format === ("shortDate" || "shortDatetime") ? dgtOpt : "numeric",
    month: dgtOpt,
    day: dgtOpt,
  }
  switch (format) {
    case "date":
    case "shortDate":
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
const getTime = (
  value: Date | number,
  sep: (typeof StrConsts.TimeSepalater)[number] = ":"
) => {
  const { padStart } = StringUtils

  if (typeof value === "number") {
    const { ErorMessage } = StrConsts
    if (!Number.isInteger(value)) return ErorMessage

    const { MINUTES, SECONDS } = NumberConsts
    const s = padStart((value % SECONDS).toString(), TIME_LENGTH)
    const m = padStart(
      (Math.floor(value / SECONDS) % MINUTES).toString(),
      TIME_LENGTH
    )
    const h = padStart(
      Math.floor(Math.floor(value / SECONDS) / MINUTES).toString(),
      TIME_LENGTH
    )
    return h + sep + m + sep + s
  }

  const s = padStart(value.getSeconds().toString(), TIME_LENGTH)
  const m = padStart(value.getMinutes().toString(), TIME_LENGTH)
  const h = padStart(value.getHours().toString(), TIME_LENGTH)
  return h + sep + m + sep + s
}

/**
 * dateを指定したformatでフォーマットする。
 * @param value 日付
 * @param format フォーマット
 * @returns フォーマット後の日付
 */
const formatDate = (value: Date, format: DateFormatType = "date") => {
  if (format === "time") return getTime(value)
  return value.toLocaleDateString("ja-JP", getFormatOpt(format))
}

/**
 * 現在日時を指定したformatで取得する。
 * @param format フォーマット
 * @returns
 */
const now = (format?: DateFormatType) => {
  return formatDate(new Date(), format)
}

const DateUtils = {
  formatDate: formatDate,
  now: now,
}

export default DateUtils
