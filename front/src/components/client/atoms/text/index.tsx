import { SxProps, Theme, Typography } from '@mui/material'

type PTextProps = {
  value: string
  sx?: SxProps<Theme>
}

const PText = ({ value, sx }: PTextProps) => {
  return <Typography sx={sx}>{value}</Typography>
}

export default PText
