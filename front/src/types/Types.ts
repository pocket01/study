/*
 * 型
 */

import { StringConsts } from "@/consts/StrConsts"

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
 * アイコンの型
 */
export type IconType = (typeof StringConsts.Icons)[number]

/**
 * 日付フォーマットの型
 */
export type DateFormatType = (typeof StringConsts.DateFormats)[number]

/**
 * パディング位置の型
 */
export type PaddingPositionType = (typeof StringConsts.PaddingPosition)[number]

/**
 * 色の型
 */
export type ColorType = (typeof StringConsts.Colors)[number]

/**
 * フォントサイズの型
 */
export type FontSizeType = (typeof StringConsts.Sizes)[number]

/**
 * 時間区切り文字の型
 */
export type SepalaterType = (typeof StringConsts.Sepalaters)[number]
