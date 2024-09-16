import { BrandConsts } from '@/consts/BrandConsts'
import { ColorConsts } from '@/consts/ColorConsts'
import { IconType } from '@/types/Types'
import { faLine } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CatchingPokemonTwoTone, PlayCircle } from '@mui/icons-material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import FmdGoodIcon from '@mui/icons-material/FmdGood'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck'
import PublicIcon from '@mui/icons-material/Public'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { IconProps } from '@mui/material'
import { CSSProperties } from 'react'

type PIconProps = {
  icon?: IconType
  sx?: IconProps['sx']
  fontAwesomeStyle?: CSSProperties
}

const PIcon = ({
  icon = 'custom',
  sx,
  fontAwesomeStyle = {
    width: '24px',
    height: '24px',
    display: 'inline-block',
  },
}: PIconProps) => {
  const getIcon = () => {
    switch (icon) {
      case 'pokeBall':
        return <CatchingPokemonTwoTone sx={sx} />
      case 'playCircle':
        return <PlayCircle sx={sx} />
      case 'task':
        return <PlaylistAddCheckIcon sx={sx} />
      case 'youTube':
        return <YouTubeIcon sx={{ ...sx, color: ColorConsts.YOUTUBE_RED }} />
      case 'map':
        return <FmdGoodIcon sx={sx} />
      case 'calendar':
        return <CalendarMonthIcon sx={sx} />
      case 'public':
        return <PublicIcon sx={sx} />
      case 'line':
        return (
          <FontAwesomeIcon
            icon={faLine}
            color={BrandConsts.Line.color}
            style={fontAwesomeStyle}
          />
        )
      default:
        return <></>
    }
  }
  return getIcon()
}

export default PIcon
