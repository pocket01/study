/**
 * 検索API
 */

import YoutubeUtils from "@/util/YoutubeUtils"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  const { createClient, authorization, search } = YoutubeUtils
  const client = await createClient()

  if (!client)
    return new Response("[ERROR]createClient failed!", { status: 500 })

  const searchParams = req.nextUrl.searchParams
  // TODO 型定義（現在：any）
  let token = JSON.parse(req.headers.getSetCookie()[0]).value
  let credential
  if (!token) {
    const code = searchParams.get("code") || ""
    credential = await authorization(client, code)
    if (!credential) {
      return new Response(`Missing query parameter`, {
        status: 500,
      })
    }
  } else {
    credential = JSON.parse(token)
  }

  const videos = await search(credential, searchParams.get("q") ?? "", 10)
  if (!videos) {
    return new Response("[ERROR]getVideos faild!", {
      status: 500,
    })
  }

  const res = new NextResponse(JSON.stringify(videos.data.items), {
    status: 200,
  })
  return res
}
