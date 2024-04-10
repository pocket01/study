import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

export type PImageProps = {
  src: string | StaticImport
  alt?: string
}

const PImage = ({ src, alt }: PImageProps) => {
  return <Image fill src={src} alt={alt ?? "画像が見つかりません"} />
}

export default PImage
