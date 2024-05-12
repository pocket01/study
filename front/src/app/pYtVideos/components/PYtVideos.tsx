"use client"

import PBox from "@/components/client/atoms/container"
import PImage from "@/components/client/atoms/image"
import { Button, Container, TextField } from "@mui/material"
import axios from "axios"
import { youtube_v3 } from "googleapis"
import { useState } from "react"

const PYtVideos = () => {
  const [q, setQ] = useState<string>("")
  const [videos, setVideos] = useState<youtube_v3.Schema$SearchResult[]>([])
  const getYtVideos = async () => {
    const result = await axios.get<
      youtube_v3.Schema$SearchResult[] | undefined
    >(`/api/youtube/search${window.location.search}`, { params: { q: q } })

    if (result.data && result.data.length) setVideos(result.data)
  }

  return (
    <>
      <TextField
        value={q}
        onChange={(e) => {
          setQ(e.target.value)
        }}
      />
      <Button onClick={getYtVideos}>検索</Button>

      <Container component={PBox} sx={{ display: "flex", margin: "auto" }}>
        {videos.map((v) => {
          const image = v.snippet?.thumbnails?.medium
          const width = image?.width ?? 0
          const height = image?.height ?? 0

          return (
            <PBox width={width} height={height} margin={1}>
              <PImage src={v.snippet?.thumbnails?.default?.url ?? ""} />
            </PBox>
          )
        })}
      </Container>
    </>
  )
}

export default PYtVideos
