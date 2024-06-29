/**
 * 検索API
 */

import YoutubeUtils from '@/util/YoutubeUtils'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest) => {
  const { authorization, search } = YoutubeUtils

  const searchParams = req.nextUrl.searchParams
  const cookies = req.headers.getSetCookie()
  const token = cookies.length ? cookies[0] : undefined
  const credential = await authorization(token, searchParams.get('code'))
  const videos = await search(credential, searchParams.get('q') ?? '', 10)

  if (!videos) {
    return new Response('[ERROR]getVideos faild!', {
      status: 400,
    })
  }

  const res = new NextResponse(JSON.stringify(videos.data.items), {
    status: 200,
  })
  return res
}
