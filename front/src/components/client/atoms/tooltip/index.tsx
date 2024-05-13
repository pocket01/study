import { Tooltip, TooltipProps } from "@mui/material"

export type PTooltipProps = {
  children?: TooltipProps["children"]
  title?: TooltipProps["title"]
  placement?: TooltipProps["placement"]
}

const PTooltip = ({
  children = <></>,
  title = "タイトル",
  placement = "top",
}: PTooltipProps) => {
  return (
    <Tooltip title={title} placement={placement}>
      {children}
    </Tooltip>
  )
}

export default PTooltip
