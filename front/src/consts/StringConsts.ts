/*
 * 文字列定数
 */

const DateTimeFormats = [
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
const MovieFormats = [
  "mp4",
  "avi",
  "mov",
  "wmv",
  "flv",
  "webm",
  "mkv",
  "mpg2",
  "3gp",
  "asf",
] as const

export const StringConsts = {
  /**
   * 日時フォーマット形式
   * date : yyyy/mm/dd
   * shortDate : yy/mm/dd
   * datetime : yyyy/mm/dd hh:mi:ss
   * shortDatetime : yy/mm/dd hh:mi:ss
   * time : hh:mi:ss
   */
  DateTimeFormats: DateTimeFormats,
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
   * 0
   */
  Zero: "0",
  /**
   * パディング開始位置
   */
  PaddingPosition: PaddingPosition,
  /**
   * 動画形式
   */
  MovieFormats: MovieFormats,
  /**
   * デフォルトサムネイル
   */
  DefaultThumn: "",
} as const satisfies Record<string, string | readonly string[]>
