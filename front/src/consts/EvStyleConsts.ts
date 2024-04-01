import { StrKeysType } from "@/types/Types"
import { SxProps, Theme } from "@mui/material"

const Keys = [
  /** クリック可能 */
  "clickable",
] as const

/**
 * イベントに関するスタイル定数
 */
export const EvStyleConsts: StrKeysType<typeof Keys, SxProps<Theme>> = {
  clickable: {
    ":hover": { cursor: "pointer" },
  },
}
