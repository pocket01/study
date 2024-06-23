import { StringConsts } from "@/consts/StringConsts"
import { SearchParamsType } from "@/types/Types"
import axios from "axios"
import { youtube_v3 } from "googleapis"
import { cookies } from "next/headers"
import { AppPYtVideosResult } from "./app"

type QueryType = SearchParamsType<{
  code: "code"
  q: "q"
}>

const sleep = (time: number) => {
  const wait = new Promise((resolve) => setTimeout(resolve, time))
  return wait
}
const getYtVideos = async (q: string, code = "") => {
  if (!q) return undefined

  const result = await axios.get<youtube_v3.Schema$SearchResult[] | undefined>(
    `https://localhost:3000/api/youtube/search`,
    {
      params: { q: q, code: code },
      headers: {
        "set-cookie": JSON.stringify(
          cookies().get(StringConsts.GoogleCookieName)
        ),
      },
    }
  )

  const res = {
    headers: JSON.parse(JSON.stringify(result.headers)),
    data: result.data,
  }
  return res ?? []
}

export default async function Home({ searchParams }: QueryType) {
  const q = await searchParams.q
  const code = await searchParams.code
  const result = await getYtVideos(q, code)

  return (
    <AppPYtVideosResult
      code={code}
      headers={result?.headers}
      defaultQuery={q}
      videos={result?.data}
    />
  )
}
