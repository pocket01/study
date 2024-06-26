import { ColorConsts } from '@/consts/ColorConsts'
import { ColorType, SizeType } from '@/types/Types'
import { Typography } from '@mui/material'

type PTextProps = {
  value: string
  color?: ColorType
  fontSize?: SizeType
}

const PText = ({ value, color = 'BLACK', fontSize = 'm' }: PTextProps) => {
  const fixFontSize =
    fontSize === 'm' ? '1.0rem' : fontSize === 's' ? '.8rem' : '1.2rem'
  return (
    <Typography sx={{ color: ColorConsts[color], fontSize: fixFontSize }}>
      {value}
    </Typography>
  )
}

export default PText
