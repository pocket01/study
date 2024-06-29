import { IconType } from '@/types/Types'
import { IconButton } from '@mui/material'
import { MouseEventHandler } from 'react'
import PIcon from '../../atoms/icon'
import PTooltip, { PTooltipProps } from '../../atoms/tooltip'

type PIconButtonProps = {
  icon: IconType
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined
  tooltip?: PTooltipProps
}

const PIconButton = ({ icon, onClick, tooltip }: PIconButtonProps) => {
  return (
    <PTooltip {...tooltip}>
      <IconButton onClick={onClick}>
        <PIcon icon={icon} />
      </IconButton>
    </PTooltip>
  )
}

export default PIconButton
