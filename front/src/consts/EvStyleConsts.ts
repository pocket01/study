import { SxProps, Theme } from "@mui/material"

/**
 * イベントに関するスタイル定数
 */
export const EvStyleConsts = {
  clickable: {
    ":hover": { cursor: "pointer" },
  },
} as const satisfies Record<string, SxProps<Theme>>
