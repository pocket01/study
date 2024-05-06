/**
 * 認証API
 */
import YoutubeUtils from "@/util/YoutubeUtils"
import { redirect } from "next/navigation"
import { NextRequest } from "next/server"

export const GET = async (req: NextRequest) => {
  const url = await YoutubeUtils.createUrl()
  if (!url) return new Response("[ERROR]createUrl failed!", { status: 400 })
  redirect(url)
}
