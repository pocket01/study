import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export type PImageProps = {
  src: string | StaticImport
  width?: number | `${number}`
  height?: number | `${number}`
  alt?: string
}

const PImage = ({ src, width = 400, height = 300, alt }: PImageProps) => {
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt ?? "画像が見つかりません"}
    />
  )
}

export default PImage
