/*
 * 型
 */

import { ColorConsts } from '@/consts/ColorConsts'
import { StringConsts } from '@/consts/StringConsts'

type StrDynamicType<T extends string, U> = { [key in T]: U }

/**
 * クエリパラメータ
 */
export type SearchParamsType<T extends Record<string, string>> = StrDynamicType<
  'searchParams',
  T
>

/**
 * アイコン
 */
export type IconType =
  | 'pokeBall'
  | 'playCircle'
  | 'task'
  | 'youTube'
  | 'map'
  | 'calendar'
  | 'public'
  | 'custom'

/**
 * パディング位置
 */
export type PaddingPositionType = (typeof StringConsts.PaddingPosition)[number]

/**
 * 色
 */
export type ColorType = keyof typeof ColorConsts

/**
 * 時間区切り文字
 */
export type SepalaterType = (typeof StringConsts.Sepalaters)[number]

/**
 * 動画形式
 */
export type MovieFormatType = (typeof StringConsts.MovieFormats)[number]

/**
 * 日時フォーマット
 */
export type DateFormatType =
  | 'YYYY/MM/DD HH:mm:ss SSS'
  | 'YYYY/MM/DD HH:mm:ss'
  | 'YYYY/MM/DD HH:mm'
  | 'YYYY/MM/DD HH'
  | 'YYYY/MM/DD'
  | 'YYYY/MM'
  | 'YYYY'
  | 'MM'
  | 'M'
  | 'DD'
  | 'D'
  | 'ddd'

/**
 * 日時
 */
export type DateType = {
  value: string | Date
  format?: DateFormatType
}

/**
 * カレンダー
 */
export type CalendarType = {
  values: DateType[]
}
