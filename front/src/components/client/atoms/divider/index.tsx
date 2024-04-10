import { Divider, DividerProps } from "@mui/material"

type PDividerProps = {
  variant?: DividerProps["variant"]
}

const PDivider = ({ variant }: PDividerProps) => {
  return <Divider variant={variant} />
}

export default PDivider
