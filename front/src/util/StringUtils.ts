import { StringConsts } from '@/consts/StringConsts'
import { PaddingPositionType } from '@/types/Types'

const padStr = (
  target: string | number,
  maxLength: number,
  position: PaddingPositionType = 'start',
  fillStr?: string,
) => {
  switch (typeof target) {
    case 'string':
      if (position === 'start') return target.padStart(maxLength, fillStr)
      else return target.padEnd(maxLength, fillStr)
    case 'number':
      if (position === 'start')
        return target.toString().padStart(maxLength, fillStr)
      else return target.toString().padEnd(maxLength, fillStr)
    default:
      return
  }
}

const padZero = (
  target: string | number,
  maxLength: number,
  position?: PaddingPositionType,
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
  padStr,

  /**
   * targetへmaxLength分"0"をパディングする
   * @param target 対象
   * @param maxLength 文字数
   * @param position パディング位置
   * @returns パディング結果
   */
  padZero,
}

export default StringUtils
