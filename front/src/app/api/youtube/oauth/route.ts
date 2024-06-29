/**
 * 認証API
 */
import YoutubeUtils from '@/util/YoutubeUtils'
import { NextRequest } from 'next/server'

export const GET = async (req: NextRequest) => {
  await YoutubeUtils.certification()
}
