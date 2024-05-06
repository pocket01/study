import { HTMLAttributeReferrerPolicy } from "react"

type PIFrameProps = {
  width: number
  height: number
  src: string
  title?: string
  allow?: string
  referrerPolicy?: HTMLAttributeReferrerPolicy
  allowFullScreen?: boolean
}

const PIFrame = ({
  width,
  height,
  src,
  title = "",
  allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
  referrerPolicy = "strict-origin-when-cross-origin",
  allowFullScreen = true,
}: PIFrameProps) => {
  return (
    <iframe
      width={width}
      height={height}
      src={src}
      title={title}
      allow={allow}
      referrerPolicy={referrerPolicy}
      allowFullScreen={allowFullScreen}
    />
  )
}

export default PIFrame
