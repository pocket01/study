import PYtSearchResult from "@/components/client/organisms/youtube/searchResult"
import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios"
import { youtube_v3 } from "googleapis"

type AppProps = {
  defaultQuery: string
  headers?: RawAxiosResponseHeaders | AxiosResponseHeaders
  videos?: youtube_v3.Schema$SearchResult[]
  code?: string
}

export const AppPYtVideosResult = ({
  defaultQuery,
  headers,
  videos,
  code = "",
}: AppProps) => {
  return (
    <PYtSearchResult
      defaultQuery={defaultQuery}
      headers={headers}
      videos={videos}
      code={code}
    />
  )
}

// export const AppPYtVideosResult = ({ defaultQuery, videos }: AppProps) => {
//   return (
//     <>
//       <Link href="./result?q=jp">test</Link>
//       {JSON.stringify(videos)}
//     </>
//   )
// }
