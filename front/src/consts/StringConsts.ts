/*
 * 文字列定数
 */

const ErrorMessages = ['[Error]Unexpected Value.'] as const
const Sepalaters = ['/', ':', '-', ';'] as const
const Sizes = ['s', 'm', 'l'] as const
const PaddingPosition = ['start', 'end'] as const
const MovieFormats = [
  'mp4',
  'avi',
  'mov',
  'wmv',
  'flv',
  'webm',
  'mkv',
  'mpg2',
  '3gp',
  'asf',
] as const

export const StringConsts = {
  /**
   * メッセージ
   */
  ErorMessages: ErrorMessages,
  /**
   * 時間区切り文字
   */
  Sepalaters: Sepalaters,
  /**
   * サイズ
   */
  Sizes: Sizes,
  /**
   * 0
   */
  Zero: '0',
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
  DefaultThumn: '',
  /**
   * GoogleCookie名
   */
  GoogleCookieName: 'pGCookie',
  /**
   * 曜日
   */
  DayOfWeeks: ['日', '月', '火', '水', '木', '金', '土'],
} as const satisfies Record<string, string | readonly string[]>
