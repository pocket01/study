import { IconType } from '@/types/Types'
import { CatchingPokemonTwoTone, PlayCircle } from '@mui/icons-material'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { IconProps } from '@mui/material'

type PIconProps = {
  icon?: IconType
  sx?: IconProps['sx']
}

const PIcon = ({ icon = 'custom', sx }: PIconProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'pokeBall':
        return <CatchingPokemonTwoTone sx={sx} />
      case 'playCircle':
        return <PlayCircle sx={sx} />
      case 'task':
        return <PlaylistAddCheckIcon />
      case 'youTube':
        return <YouTubeIcon />
      default:
        return <></>
    }
  }
  return getIcon()
}

export default PIcon
