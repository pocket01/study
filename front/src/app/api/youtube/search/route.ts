/**
 * 検索API
 */
import YoutubeUtils from "@/util/YoutubeUtils"
import { NextApiResponse } from "next"
import { NextRequest } from "next/server"

export const GET = async (req: NextRequest, res: NextApiResponse) => {
  const { search } = YoutubeUtils
  const videos = await search()
  if (!videos)
    return new Response("[ERROR]getVideos faild!", {
      status: 400,
    })

  return new Response(JSON.stringify(videos.data.items), {
    status: 200,
  })
}
