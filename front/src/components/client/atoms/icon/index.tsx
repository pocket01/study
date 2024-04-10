import { EvStyleConsts } from "@/consts/EvStyleConsts"
import { IconType } from "@/types/Types"
import { CatchingPokemonTwoTone } from "@mui/icons-material"
import { SxProps, Theme } from "@mui/material"
import { MouseEventHandler } from "react"

type PIconProps = {
  icon: IconType
  sx?: SxProps<Theme>
  onClick?: MouseEventHandler<SVGSVGElement>
}

const PIcon = ({ icon = "pokeBall", sx, onClick }: PIconProps) => {
  const { clickable } = EvStyleConsts

  const fixSx = { ...sx, ...(onClick && clickable) }
  return icon === "pokeBall" ? (
    <CatchingPokemonTwoTone sx={fixSx} onClick={onClick} />
  ) : (
    <></>
  )
}

export default PIcon
