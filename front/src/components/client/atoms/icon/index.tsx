import { IconType } from "@/types/Types"
import { CatchingPokemonTwoTone, PlayCircle } from "@mui/icons-material"
import { IconProps } from "@mui/material"

type PIconProps = {
  icon: IconType
  sx?: IconProps["sx"]
}

const PIcon = ({ icon = "pokeBall", sx }: PIconProps) => {
  return icon === "pokeBall" ? (
    <CatchingPokemonTwoTone sx={sx} />
  ) : icon === "playCircle" ? (
    <PlayCircle sx={sx} />
  ) : (
    <></>
  )
}

export default PIcon
