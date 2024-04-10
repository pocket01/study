/*
 * 型
 */

import { StringConsts } from "@/consts/StringConsts"

/**
 * { [key:string] : T } | T
 *
 * @param K キーとするstring配列
 * @param T 値
 */
export type StrKeysType<K, T> = K extends readonly string[]
  ? { [key in K[number]]: T }
  : T

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
export type ColorType = (typeof StringConsts.Colors)[number]

/**
 * フォントサイズ
 */
export type FontSizeType = (typeof StringConsts.Sizes)[number]

/**
 * 時間区切り文字
 */
export type SepalaterType = (typeof StringConsts.Sepalaters)[number]

/**
 * 動画形式
 */
export type MovieFormatType = (typeof StringConsts.MovieFormats)[number]
