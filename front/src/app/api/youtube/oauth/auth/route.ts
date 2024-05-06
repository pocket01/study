/**
 * 認可API
 */
import YoutubeUtils from "@/util/YoutubeUtils"
import { NextRequest } from "next/server"

export const GET = async (req: NextRequest) => {
  const { createClient, authorization } = YoutubeUtils
  const client = await createClient()

  if (!client)
    return new Response("[ERROR]createClient failed!", { status: 400 })

  const searchParams = req.nextUrl.searchParams
  const code = searchParams.get("code")
  const credencial = await authorization(client, code)

  if (!credencial)
    return new Response(`Missing query parameter`, {
      status: 400,
    })

  return new Response("success!", {
    status: 200,
  })
}
