"use client"

import PBox from "@/components/client/atoms/container"
import PImage from "@/components/client/atoms/image"
import { Button, Container, Link, TextField } from "@mui/material"
import { AxiosResponseHeaders, RawAxiosResponseHeaders } from "axios"
import { youtube_v3 } from "googleapis"
import { useEffect, useState } from "react"

type PYtSearchResultProps = {
  defaultQuery: string
  headers?: RawAxiosResponseHeaders | AxiosResponseHeaders
  videos?: youtube_v3.Schema$SearchResult[]
  code?: string
}

const PYtSearchResult = ({
  defaultQuery,
  headers,
  videos,
  code = "",
}: PYtSearchResultProps) => {
  const [q, setQ] = useState<string>(defaultQuery)

  useEffect(() => {
    document.cookie = headers?.["set-cookie"] ? headers["set-cookie"][0] : ""
  }, [])

  return (
    <>
      <Link href="/api/youtube/oauth">認証</Link>
      <TextField
        defaultValue={q}
        onBlur={(e) => {
          setQ(e.target.value)
        }}
      />
      <Button
        href={`/portfolio/pYtVideos?${code && "code=" + code + "&"}q=${q}`}
      >
        検索
      </Button>
      <Container component={PBox} sx={{ display: "flex", margin: "auto" }}>
        {videos?.map((v, index) => {
          const image = v.snippet?.thumbnails?.medium
          const url = image?.url
          const width = image?.width ?? 0
          const height = image?.height ?? 0

          return (
            index < 5 && (
              <PBox
                position={"relative"}
                key={index}
                width={width}
                height={height}
                margin={1}
              >
                <PImage src={url ?? ""} />
              </PBox>
            )
          )
        })}
      </Container>
      <Container component={PBox} sx={{ display: "flex", margin: "auto" }}>
        {videos?.map((v, index) => {
          const image = v.snippet?.thumbnails?.medium
          const url = image?.url
          const width = image?.width ?? 0
          const height = image?.height ?? 0

          return (
            index >= 5 && (
              <PBox
                position={"relative"}
                key={index}
                width={width}
                height={height}
                margin={1}
              >
                <PImage src={url ?? ""} />
              </PBox>
            )
          )
        })}
      </Container>
    </>
  )
}

export default PYtSearchResult
