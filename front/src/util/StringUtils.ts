import { StringConsts } from "@/consts/StringConsts"
import { PaddingPositionType } from "@/types/Types"

const padStr = (
  target: string,
  maxLength: number,
  position: PaddingPositionType = "start",
  fillStr?: string
) => {
  if (position === "start") return target.padStart(maxLength, fillStr)
  else return target.padEnd(maxLength, fillStr)
}

const padZero = (
  target: string,
  maxLength: number,
  position?: PaddingPositionType
) => {
  const { Zero } = StringConsts
  return padStr(target, maxLength, position, Zero)
}

/**
 * 文字列Utils
 */
const StringUtils = {
  /**
   * targetへmaxLength分fillStrをパディングする
   * @param target 対象
   * @param maxLength 文字数
   * @param position パディング位置
   * @param fillStr パディング文字列
   * @returns パディング結果
   */
  padStr: padStr,

  /**
   * targetへmaxLength分"0"をパディングする
   * @param target 対象
   * @param maxLength 文字数
   * @param position パディング位置
   * @returns パディング結果
   */
  padZero: padZero,
}

export default StringUtils
