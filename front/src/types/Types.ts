/*
 * 型
 */

import { ColorConsts } from "@/consts/ColorConsts"
import { StringConsts } from "@/consts/StringConsts"

type StrDynamicType<T extends string, U> = { [key in T]: U }

/**
 * クエリパラメータ
 */
export type SearchParamsType<T extends Record<string, string>> = StrDynamicType<
  "searchParams",
  T
>

/**
 * アイコン
 */
export type IconType = (typeof StringConsts.Icons)[number]

/**
 * 日付フォーマット
 */
export type DateTimeFormatType = (typeof StringConsts.DateTimeFormats)[number]

/**
 * パディング位置
 */
export type PaddingPositionType = (typeof StringConsts.PaddingPosition)[number]

/**
 * 色
 */
export type ColorType = keyof typeof ColorConsts

/**
 * サイズ
 */
export type SizeType = (typeof StringConsts.Sizes)[number]

/**
 * 時間区切り文字
 */
export type SepalaterType = (typeof StringConsts.Sepalaters)[number]

/**
 * 動画形式
 */
export type MovieFormatType = (typeof StringConsts.MovieFormats)[number]
