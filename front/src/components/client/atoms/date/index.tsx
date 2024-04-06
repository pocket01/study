import { DateFormatType } from "@/types/Types"
import DateUtils from "@/util/DateUtils"
import { Typography } from "@mui/material"

type PDateProps = {
  value: Date
  format?: DateFormatType
}

const PDate = ({ value, format = "date" }: PDateProps) => {
  const fixDate = DateUtils.formatDate(value, format)
  return <Typography>{fixDate}</Typography>
}

export default PDate
