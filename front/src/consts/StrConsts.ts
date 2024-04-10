/*
 * 文字列定数
 */

const DateFormats = [
  "date",
  "shortDate",
  "datetime",
  "shortDatetime",
  "time",
] as const
const Icons = ["pokeBall", "custom"] as const
const ErrorMessages = ["[Error]Unexpected Value."] as const
const Sepalaters = ["/", ":", "-", ";"] as const
const Colors = ["black", "white", "red", "green", "blue", "yellow"] as const
const Sizes = ["s", "m", "l"] as const
const PaddingPosition = ["start", "end"] as const

export const StringConsts = {
  /**
   * 日時フォーマット形式
   * date : yyyy/mm/dd
   * shortDate : yy/mm/dd
   * datetime : yyyy/mm/dd hh:mi:ss
   * shortDatetime : yy/mm/dd hh:mi:ss
   * time : hh:mi:ss
   */
  DateFormats: DateFormats,
  /**
   * アイコン名
   */
  Icons: Icons,
  /**
   * メッセージ
   */
  ErorMessages: ErrorMessages,
  /**
   * 時間区切り文字
   */
  Sepalaters: Sepalaters,
  /**
   * 色
   */
  Colors: Colors,
  /**
   * サイズ
   */
  Sizes: Sizes,
  /**
   *
   */
  Zero: "0",
  /**
   * パディング開始位置
   */
  PaddingPosition: PaddingPosition,
} as const satisfies Record<string, string | readonly string[]>
