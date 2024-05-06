/**
 * チャンネル一覧取得API
 */
import YoutubeUtils from "@/util/YoutubeUtils"
import { NextApiResponse } from "next"
import { NextRequest } from "next/server"

export const GET = async (req: NextRequest, res: NextApiResponse) => {
  const { getChannels } = YoutubeUtils
  const channels = await getChannels()
  if (!channels)
    return new Response("[ERROR]getChannels faild!", {
      status: 400,
    })

  return new Response(JSON.stringify(channels.data.items), {
    status: 200,
  })
}
