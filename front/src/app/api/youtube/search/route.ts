/**
 * 検索API
 */
import YoutubeUtils from "@/util/YoutubeUtils"
import { NextRequest } from "next/server"

export const GET = async (req: NextRequest) => {
  const { createClient, authorization, getOAuthTokenCookie, search } =
    YoutubeUtils
  const client = await createClient()

  if (!client)
    return new Response("[ERROR]createClient failed!", { status: 400 })

  const searchParams = req.nextUrl.searchParams
  if (!getOAuthTokenCookie()) {
    const code = searchParams.get("code")
    if (!(await authorization(client, code)))
      return new Response(`Missing query parameter`, {
        status: 400,
      })
  }

  const videos = await search(searchParams.get("q") ?? "", 10)
  if (!videos)
    return new Response("[ERROR]getVideos faild!", {
      status: 400,
    })

  return new Response(JSON.stringify(videos.data.items), {
    status: 200,
  })
}
