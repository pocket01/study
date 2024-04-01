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
