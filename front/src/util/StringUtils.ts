/**
 * 文字列Utils
 */

/**
 * targetへfillStrをmaxLength分先頭パディングする
 * @param target 対象
 * @param maxLength
 * @param fillStr
 * @returns パディング結果
 */
const padStart = (target: string, maxLength: number, fillStr?: string) => {
  return target.padStart(maxLength, fillStr)
}

const StringUtils = {
  padStart: padStart,
}

export default StringUtils
