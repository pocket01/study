/*
 * 型
 */

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
 * 日付フォーマットの型
 * date : yyyy/mm/dd
 * shortDate : yy/mm/dd
 * datetime : yyyy/mm/dd hh:mi:ss
 * shortDatetime : yy/mm/dd hh:mi:ss
 * time : hh:mi:ss
 */
export type DateFormatType =
  | "date"
  | "shortDate"
  | "datetime"
  | "shortDatetime"
  | "time"
