import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

export type PImageProps = {
  src: string | StaticImport
  width?: number | `${number}`
  height?: number | `${number}`
  alt?: string
}

const PImage = ({ src, width, height, alt }: PImageProps) => {
  const isFill = width === undefined && height === undefined
  const fill = {
    fill: isFill,
    objectFit: isFill ? 'contain' : undefined,
  }
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt ?? '画像が見つかりません'}
      {...fill}
    />
  )
}

export default PImage
