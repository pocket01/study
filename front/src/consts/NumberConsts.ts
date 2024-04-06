/*
 * 数値定数
 */
import { StrKeysType } from "@/types/Types"

const Keys = [
  /**
   * 月
   */
  "MONTH",
  /**
   * 日
   */
  "DAY",
  /**
   * 時
   */
  "HOURS",
  /**
   * 分
   */
  "MINUTES",
  /**
   * 秒
   */
  "SECONDS",
] as const

export const NumberConsts: StrKeysType<typeof Keys, number> = {
  MONTH: 12,
  DAY: 31,
  HOURS: 24,
  MINUTES: 60,
  SECONDS: 60,
} as const
