import { DateTimeFormatType } from '@/types/Types'
import DateUtils from '@/util/DateUtils'
import { Theme } from '@emotion/react'
import { SxProps, Typography } from '@mui/material'

export type PDateTimeProps = {
  value: Date | number
  format?: DateTimeFormatType
  sx?: SxProps<Theme>
}

const PDateTime = ({ value, format = 'date', sx }: PDateTimeProps) => {
  const { formatDate } = DateUtils
  const fixDate = formatDate(value, format)
  return <Typography sx={sx}>{fixDate}</Typography>
}

export default PDateTime
