/*
 * 文字列定数
 */
import { StrKeysType } from "@/types/Types"

const Keys = [
  /**
   * アイコン名
   */
  "Icons",
  /**
   * メッセージ
   */
  "ErorMessage",
  /**
   * 時間区切り文字
   */
  "TimeSepalater",
] as const

export const StrConsts: StrKeysType<typeof Keys, string[]> = {
  Icons: ["pokeBall", "custom"],
  ErorMessage: ["[Error]Unexpected Value."],
  TimeSepalater: [":", "-"],
} as const
