import { Theme } from "@emotion/react";
import { SxProps, Typography } from "@mui/material";

type PImageProps = {
  url: String;
  sx?: SxProps<Theme>;
};

const PImage = ({ url, sx }: PImageProps) => {
  return <Typography sx={sx}>{`画像URL：${url}`}</Typography>;
};

export default PImage;
