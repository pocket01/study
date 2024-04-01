/*
 * 文字列定数
 */
import { StrKeysType } from "@/types/Types"

const Keys = [
  /**
   * アイコン名
   */
  "Icons",
] as const

export const StrConsts: StrKeysType<typeof Keys, string[]> = {
  Icons: ["pokeBall", "custom"],
} as const
