/*
 * 数値定数
 */
const DAYS = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
  23, 24, 25, 26, 27, 28, 29, 30, 31,
] as const
const HOURS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23,
] as const
const MINUTES = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
] as const
const SECONDS = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
  22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
  41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
] as const

export const NumberConsts = {
  /**
   * 日
   */
  DAYS: DAYS,
  /**
   * 日数（31日）
   */
  DAYS_SIZE_31: DAYS.length,
  /**
   * 日数（30日）
   */
  DAYS_SIZE_30: DAYS.length - 1,
  /**
   * 日数（29日）
   */
  DAYS_SIZE_29: DAYS.length - 2,
  /**
   * 日数（28日）
   */
  DAYS_SIZE_28: DAYS.length - 3,
  /**
   * 時
   */
  HOURS: HOURS,
  /**
   * 時数
   */
  HOURS_SIZE: HOURS.length,
  /**
   * 分
   */
  MINUTES: MINUTES,
  /**
   * 分数
   */
  MINUTES_SIZE: MINUTES.length,
  /**
   * 秒
   */
  SECONDS: SECONDS,
  /**
   * 秒数
   */
  SECONDS_SIZE: SECONDS.length,
  /**
   * 1秒（1000ミリ秒）
   */
  SECOND_BY_MILLSEC: 1000,
} as const satisfies Record<string, number | readonly number[]>
