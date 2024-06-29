import PYtSearchResult from '@/components/client/organisms/youtube/searchResult'
import { StringConsts } from '@/consts/StringConsts'
import { SearchParamsType } from '@/types/Types'
import axios from 'axios'
import { youtube_v3 } from 'googleapis'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

type QueryType = SearchParamsType<{
  code: 'code'
  q: 'q'
}>

const getYtVideos = async (q: string, code = '') => {
  if (!q) return undefined

  const result = await axios.get<youtube_v3.Schema$SearchResult[] | undefined>(
    `https://localhost:3000/api/youtube/search`,
    {
      params: { q: q, code: code },
      headers: {
        'set-cookie': JSON.stringify(
          cookies().get(StringConsts.GoogleCookieName),
        ),
      },
    },
  )

  const res = {
    headers: JSON.parse(JSON.stringify(result.headers)),
    data: result.data,
  }
  return res ?? []
}

export default async function Home({ searchParams }: QueryType) {
  const code = searchParams.code
  const token = cookies().get(StringConsts.GoogleCookieName)?.value

  if (!code && !token) redirect('/api/youtube/oauth')

  const q = await searchParams.q
  const result = await getYtVideos(q, code)

  return (
    <PYtSearchResult
      defaultQuery={q}
      headers={result?.headers}
      videos={result?.data}
      code={code}
    />
  )
}
