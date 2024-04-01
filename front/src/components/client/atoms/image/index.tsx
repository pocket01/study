import { Box, SxProps, Theme } from "@mui/material";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

type PImageProps = {
  src: string | StaticImport;
  sx?: SxProps<Theme>;
  alt?: string;
};

const PImage = ({ src, sx, alt }: PImageProps) => {
  return (
    <Box sx={sx}>
      <Image fill={true} src={src} alt={alt ?? "画像が見つかりません"} />
    </Box>
  );
};

export default PImage;
