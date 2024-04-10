import { NumberConsts } from "@/consts/NumberConsts"
import { StringConsts } from "@/consts/StringConsts"
import { MovieFormatType } from "@/types/Types"
import { useEffect, useState } from "react"
import PBox from "../../atoms/container"
import PDateTime from "../../atoms/date"
import PImage, { PImageProps } from "../../atoms/image"

type PMovieProps = {
  /**
   * 再生時間
   */
  time: number
  /**
   * 形式
   */
  format: MovieFormatType
  /**
   * サムネイル
   */
  thumn?: PImageProps
  /**
   * タイトル
   */
  title?: string
  /**
   * 説明
   */
  description?: string
}

const PMovie = ({
  time,
  format,
  thumn = { src: StringConsts.DefaultThumn, alt: "サムネなし" },
  title = "",
  description = "",
}: PMovieProps) => {
  const { SECOND_BY_MILLSEC } = NumberConsts
  const [t, setT] = useState<number>(0)

  useEffect(() => {
    if (t >= time) {
      return
    }

    const interval = setInterval(() => {
      setT((prev) => prev + 1)
    }, SECOND_BY_MILLSEC)

    return () => {
      clearInterval(interval)
    }
  }, [t, time])

  return (
    <PBox sx={{ position: "relative", width: "192px", height: "128px" }}>
      <PImage {...thumn} />
      <PDateTime
        value={t}
        format="time"
        sx={{ position: "absolute", left: "65%", top: "83%", color: "white" }}
      />
    </PBox>
  )
}

export default PMovie
