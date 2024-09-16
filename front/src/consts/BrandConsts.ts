/*
 * ブランド定数
 */

import { BrandType } from '@/types/Types'
import { ColorConsts } from './ColorConsts'

export const BrandConsts = {
  /**
   * LINE
   */
  Line: {
    color: ColorConsts.LINE_CORPORATE_COLOR,
  },
  /**
   * Yahoo
   */
  Yahoo: {
    color: ColorConsts.YAHOO_CORPORATE_COLOR,
  },
} as const satisfies Record<string, BrandType>
